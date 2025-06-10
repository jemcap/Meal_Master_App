import { useState } from "react";
import { useAddPantryItem } from "../../hooks/usePantry";

import useAuth from "../../hooks/useAuth";

const AddPantryItemForm = () => {
  const { userId } = useAuth();
  const { mutate: item, isPending } = useAddPantryItem();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: 1,
    unit: "Pieces",
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

    item({
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
    <form onSubmit={handleSubmit} className="p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-5">Add Pantry Item</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="name" aria-label="name">
            Item Name*
          </label>
          <input
            name="name"
            placeholder="e.g., Milk, Bread, Apples"
            value={formData.name}
            onChange={handleChange}
            required
            className="input border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Item Category*</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input border"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Grains">Grains</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Spices">Spices</option>
            <option value="Canned">Canned</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity" aria-label="Quantity">
            Quantity
          </label>
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="input border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="unit" aria-label="unit">
            Unit
          </label>
          <input
            name="unit"
            placeholder="Unit (e.g., g, ml)"
            value={formData.unit}
            onChange={handleChange}
            className="input border"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiry_date" aria-label="Expiry Date">
            Expiry Date
          </label>
          <input
            name="expiry_date"
            type="date"
            value={formData.expiry_date}
            onChange={handleChange}
            className="input border"
          />
        </div>
      </div>

      <button type="submit" disabled={isPending} className="btn-primary shadow-xl border mt-5 py-1 px-5 rounded-md">
        {isPending ? "Adding..." : "Add Item"}
      </button>
    </form>
  );
};

export default AddPantryItemForm;
