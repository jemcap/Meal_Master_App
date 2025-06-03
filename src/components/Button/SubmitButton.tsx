import { useNavigation } from "react-router-dom";

type SubmitButtonProps = {
  text: string;
  type: "submit" | "button";
  handleClick?: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  type,
  handleClick,
}) => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  return (
    <button
      type={type}
      className="inline-block rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white shadow-md transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 active:bg-orange-700 active:shadow-inner dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-500"
      disabled={isSubmitting}
      onClick={handleClick}
    >
      {isSubmitting ? "Submitting..." : text || "Submit"}
    </button>
  );
};

export default SubmitButton;
