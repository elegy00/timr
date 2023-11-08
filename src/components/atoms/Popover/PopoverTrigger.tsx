import React, { PropsWithChildren, ReactNode } from "react";
import { useOverlayTrigger } from "react-aria";
import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";
import { Button } from "../Button/Button";
import { Popover } from "./Popover";

interface Props extends OverlayTriggerProps {
  trigger: ReactNode | undefined;
}

const PopoverTrigger: React.FC<PropsWithChildren<Props>> = ({
  trigger,
  children,
  ...props
}) => {
  const ref = React.useRef(null);
  const state = useOverlayTriggerState(props);

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} buttonRef={ref}>
        {trigger}
      </Button>
      {state.isOpen && (
        <Popover {...props} triggerRef={ref} state={state}>
          <div className="p-4 bg-white shadow-lg" {...overlayProps}>
            {children}
          </div>
        </Popover>
      )}
    </>
  );
};

export { PopoverTrigger };
