import useAuth from "../hooks/useAuth";
import { usePantryItems } from "../hooks/usePantry";
import AddPantryItemForm from "../components/pantry/AddPantryItemForm";

import { useSelector } from "react-redux";

const PantryPage = () => {
  const reduxUser = useSelector((state: any) => state.auth.user);
  console.log('Redux auth state:', reduxUser);
  const { userId } = useAuth();
  const { data, isLoading, error } = usePantryItems(userId || "");

  console.log("Pantry items data:", data);

  if (!userId) return <p>Please log in to access your pantry.</p>;
  if (isLoading) return <p>Loading your pantry...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <AddPantryItemForm />
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
