import { PropsWithChildren, RefObject } from "react";
import { Styleable } from "../../../types/styleable";
import classNames from "classnames";
import React from "react";
import { AriaButtonOptions, useButton } from "react-aria";

type Props = PropsWithChildren<AriaButtonOptions<"button">> &
  Styleable & {
    buttonRef?: RefObject<HTMLButtonElement>;
  };

const Button: React.FC<Props> = (props) => {
  const { className, buttonRef, children, ...rest } = props;
  const fallbackRef = React.useRef(null);
  const ref = buttonRef ?? fallbackRef;
  const { buttonProps } = useButton(rest, ref);
  return (
    <button
      ref={ref}
      {...buttonProps}
      className={classNames(
        "relative flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300",
        className
      )}
    >
      <span className="h-full w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  );
};

export { Button };
