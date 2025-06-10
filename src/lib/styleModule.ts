export const tagStyles = (tag: string) => {
  switch (tag) {
    case "grains":
      return "bg-yellow-200 text-yellow-800 border-yellow-400 py-0.5 px-3 rounded-md";
    case "vegetables":
      return "bg-green-200 text-green-800 border-green-400 py-0.5 px-3 rounded-md";
    case "fruits":
      return "bg-red-200 text-red-800 border-red-400 py-0.5 px-3 rounded-md";
    case "dairy":
      return "bg-blue-200 text-blue-800 border-blue-400 py-0.5 px-3 rounded-md";
    case "meat":
      return "bg-purple-200 text-purple-800 border-purple-400 py-0.5 px-3 rounded-md";
    case "spices":
      return "bg-orange-200 text-orange-800 border-orange-400 py-0.5 px-3 rounded-md";
    case "canned":
      return "bg-gray-200 text-gray-800 border-gray-400 py-0.5 px-3 rounded-md";
    case "frozen":
      return "bg-teal-200 text-teal-800 border-teal-400 py-0.5 px-3 rounded-md";
    case "snacks":
      return "bg-pink-200 text-pink-800 border-pink-400 py-0.5 px-3 rounded-md ";
    case "beverages":
      return "bg-indigo-200 text-indigo-800 border-indigo-400 py-0.5 px-3 rounded-md";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300 py-0.5 px-3 rounded-md";
  }
};
