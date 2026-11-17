import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeDown: ForwardRefExoticComponent<HandTouchSwipeDownProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeDown;
export { HandTouchSwipeDown };
