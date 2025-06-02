import { useState } from "react";
import { useAddPantryItem } from "../../hooks/usePantry";

import useAuth from "../../hooks/useAuth";

const AddPantryItemForm = () => {
  const { userId } = useAuth();
  const { mutate, isPending } = useAddPantryItem();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: 1,
    unit: "pcs",
    expiry_date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    mutate({
      ...formData,
      quantity: +formData.quantity,
      user_id: userId,
    });

    setFormData({
      name: "",
      category: "",
      quantity: 1,
      unit: "",
      expiry_date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border p-4 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold">Add Pantry Item</h2>

      <input
        name="name"
        placeholder="Item name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="input"
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="input"
      />
      <input
        name="unit"
        placeholder="Unit (e.g., g, ml)"
        value={formData.unit}
        onChange={handleChange}
        className="input"
      />
      <input
        name="expiry_date"
        type="date"
        value={formData.expiry_date}
        onChange={handleChange}
        className="input"
      />

      <button type="submit" disabled={isPending} className="btn-primary">
        {isPending ? "Adding..." : "Add Item"}
      </button>
    </form>
  );
};

export default AddPantryItemForm;
