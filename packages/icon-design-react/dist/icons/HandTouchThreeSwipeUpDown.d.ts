import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchThreeSwipeUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchThreeSwipeUpDown: ForwardRefExoticComponent<HandTouchThreeSwipeUpDownProps & RefAttributes<SVGSVGElement>>;

export default HandTouchThreeSwipeUpDown;
export { HandTouchThreeSwipeUpDown };
