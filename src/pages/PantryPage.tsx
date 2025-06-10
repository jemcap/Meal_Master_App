import { useState } from "react";
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
import { usePantryItems, useDeletePantryItem } from "../hooks/usePantry";
import AddPantryItemForm from "../components/pantry/AddPantryItemForm";
import { tagStyles } from "@/lib/styleModule";

const PantryPage = () => {
  const [expiryFilter, setExpiryFilter] = useState<
    "all" | "expiring" | "expired"
  >("all");
  const { userId } = useAuth();
  const { data, isLoading, error } = usePantryItems(userId || "");
  const { mutate: deleteItem } = useDeletePantryItem();

  console.log("Pantry items data:", data);
  console.log("Length of pantry items:", data?.length);
  const today = new Date();

  const getFilteredByExpiry = (items: typeof data) => {
    if (!items) return [];
    if (expiryFilter === "expiring") {
      return items.filter((item) => {
        const expiry = parseISO(item.expiry_date);
        const daysDiff = differenceInDays(expiry, today);
        return isBefore(today, expiry) && daysDiff <= 7 && daysDiff >= 0;
      });
    }
    if (expiryFilter === "expired") {
      return items.filter((item) => {
        const expiry = parseISO(item.expiry_date);
        return isBefore(expiry, today);
      });
    }
    return items;
  };

  const displayedData = getFilteredByExpiry(data);

  const expiringSoonCount = data?.filter((item) => {
    const expiry = parseISO(item.expiry_date);
    const daysDiff = differenceInDays(expiry, today);
    return isBefore(today, expiry) && daysDiff <= 7 && daysDiff >= 0;
  }).length;

  const expiredCount = data?.filter((item) => {
    const expiry = parseISO(item.expiry_date);
    return isBefore(expiry, today);
  }).length;

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading pantry...</p>
      </div>
    );

  if (!userId)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please log in to access your pantry.</p>
      </div>
    );
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
        <button
          onClick={() => setExpiryFilter("all")}
          className={`cursor-pointer border-2 p-4 rounded-lg flex flex-col items-center ${
            expiryFilter === "all"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <h3 className="text-lg font-semibold">Total Items</h3>
          <p className="text-2xl font-bold">{data?.length || 0}</p>
        </button>
        <button
          onClick={() => setExpiryFilter("expiring")}
          className={`cursor-pointer border-2 p-4 rounded-lg flex flex-col items-center ${
            expiryFilter === "expiring"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <h3 className="text-lg font-semibold">Expiring Soon</h3>
          <p className="text-2xl font-bold">{expiringSoonCount || 0}</p>
        </button>
        <button
          onClick={() => setExpiryFilter("expired")}
          className={`cursor-pointer border-2 p-4 rounded-lg flex flex-col items-center ${
            expiryFilter === "expired"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <h3 className="text-lg font-semibold">Expired</h3>
          <p className="text-2xl font-bold">{expiredCount || 0}</p>
        </button>
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
      <ul className="space-y-2 w-full">
        {displayedData &&
          displayedData?.map((item) => (
            <div className="flex justify-between">
              <li
                key={item.id}
                className="p-2 border rounded-md flex justify-between w-full"
              >
                <div className="flex flex-col w-full">
                  <div>{item.name}</div>

                  <div className="text-xs text-gray-500 space-x-5 flex justify-between">
                    <div className="space-x-5">
                      <span>
                        ({item.quantity} {item.unit})
                      </span>
                      <span>Expiry: {item.expiry_date}</span>
                    </div>
                    <div>
                      <small
                        className={`${tagStyles(item.category.toLowerCase())}`}
                      >
                        {item.category}
                      </small>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteItem({ id: item.id })}
                  className="ml-2 p-2 hover:bg-red-100 rounded cursor-pointer"
                  aria-label="Delete item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 11v6M14 11v6"
                    />
                  </svg>
                </button>
              </li>
            </div>
          ))}
        {displayedData.length === 0 && <div>No items in pantry.</div>}
      </ul>
    </div>
  );
};

export default PantryPage;
