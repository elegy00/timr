import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import { Styleable } from "../../../types/styleable";

type Props = InputHTMLAttributes<HTMLInputElement> & Styleable;

const Input = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={classNames(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        className
      )}
    />
  );
};

export { Input };
