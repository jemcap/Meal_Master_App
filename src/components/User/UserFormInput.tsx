import React from "react";

type UserFormInputProps = {
  label: string;
  type: string;
  name: string;
  defaultValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserFormInput: React.FC<UserFormInputProps> = ({
  label,
  type,
  name,
  defaultValue,
  handleChange,
}) => {
  return (
    <div className="form-control my-5 flex flex-col">
      <label className="label-text capitalize text-gray-500">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="border-2 rounded-md border-gray-300 p-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default UserFormInput;
