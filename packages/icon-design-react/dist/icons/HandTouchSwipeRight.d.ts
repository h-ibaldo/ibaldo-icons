import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeRight: ForwardRefExoticComponent<HandTouchSwipeRightProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeRight;
export { HandTouchSwipeRight };
