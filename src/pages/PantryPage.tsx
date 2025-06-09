import { differenceInDays, isBefore, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useAuth from "../hooks/useAuth";
import { usePantryItems } from "../hooks/usePantry";
import AddPantryItemForm from "../components/pantry/AddPantryItemForm";

import { useSelector } from "react-redux";

const PantryPage = () => {
  const reduxUser = useSelector((state: any) => state.auth.user);
  console.log("Redux auth state:", reduxUser);
  const { userId } = useAuth();
  const { data, isLoading, error } = usePantryItems(userId || "");

  console.log("Pantry items data:", data);
  console.log("Length of pantry items:", data?.length);

  const today = new Date();

  const expiringSoonCount = data?.filter((item) => {
    const expiry = parseISO(item.expiry_date);
    const daysDiff = differenceInDays(expiry, today);
    return isBefore(today, expiry) && daysDiff <= 7 && daysDiff >= 0;
  }).length;

  const expiredCount = data?.filter((item) => {
    const expiry = parseISO(item.expiry_date);
    return isBefore(expiry, today);
  }).length;

  if (!userId)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please log in to access your pantry.</p>
      </div>
    );
  if (isLoading) return <p>Loading your pantry...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 pt-32">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to Your Pantry
        </h1>
        <p className="text-gray-600">
          Here you can manage your pantry items, add new items, and keep track
          of their expiry dates.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border-2 border-gray-300 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold">Total Items</h3>
          <p className="text-2xl font-bold">{data?.length || 0}</p>
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold">Expiring Soon</h3>
          <p className="text-2xl font-bold">{expiringSoonCount || 0}</p>
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold">Expired</h3>
          <p className="text-2xl font-bold">{expiredCount || 0}</p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Pantry Item</Button>
        </DialogTrigger>
        <DialogContent>
          <AddPantryItemForm />
        </DialogContent>
      </Dialog>

      <h1 className="text-2xl font-bold">Your Pantry</h1>
      <ul className="space-y-2">
        {data?.map((item) => (
          <li
            key={item.id}
            className="p-2 border rounded-md flex justify-between"
          >
            <span>
              {item.name} ({item.quantity} {item.unit})
            </span>
            <span className="text-sm text-gray-500">
              Exp: {item.expiry_date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PantryPage;
