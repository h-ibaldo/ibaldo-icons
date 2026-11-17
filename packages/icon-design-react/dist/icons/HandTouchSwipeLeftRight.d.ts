import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeLeftRight: ForwardRefExoticComponent<HandTouchSwipeLeftRightProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeLeftRight;
export { HandTouchSwipeLeftRight };
