import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeUpDown: ForwardRefExoticComponent<HandTouchSwipeUpDownProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeUpDown;
export { HandTouchSwipeUpDown };
