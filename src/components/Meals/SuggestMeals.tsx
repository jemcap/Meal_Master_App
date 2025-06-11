import { usePantryItems } from "@/hooks/usePantry";
import { fetchSuggestedMeals } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuggestMeals = () => {
  const user = useSelector((state: any) => state.auth.user);
  const { data: pantryItems } = usePantryItems(user.id);

  const pantryIng = pantryItems?.map((item) => item.name.toLowerCase()) ?? [];

  const { data, isLoading, error } = useQuery({
    queryKey: ["suggestedMeals", pantryIng],
    queryFn: () => fetchSuggestedMeals(pantryIng),
    enabled: pantryIng.length > 0,
  });

  console.log(data)

  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>Error {error.message}</p>;


  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((d: any) => (
        <Link to={`/meals/${d.id}`} key={d.id} state={d} className="bg-white p-4 rounded-xl shadow">
          <img src={d.image} alt={d.title} className="w-full rounded-xl" />
          <h3 className="font-bold text-lg mt-2">{d.title}</h3>
          <p>Used ingredients: {d.usedIngredientCount}</p>
          <p>Missing ingredients: {d.missedIngredientCount}</p>
        </Link>
      ))}
    </div>;
};

export default SuggestMeals;
