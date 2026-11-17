import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchThreeSwipeLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchThreeSwipeLeft: ForwardRefExoticComponent<HandTouchThreeSwipeLeftProps & RefAttributes<SVGSVGElement>>;

export default HandTouchThreeSwipeLeft;
export { HandTouchThreeSwipeLeft };
