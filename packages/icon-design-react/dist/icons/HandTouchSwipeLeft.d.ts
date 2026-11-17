import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeLeft: ForwardRefExoticComponent<HandTouchSwipeLeftProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeLeft;
export { HandTouchSwipeLeft };
