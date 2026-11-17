import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchThreeSwipeDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchThreeSwipeDown: ForwardRefExoticComponent<HandTouchThreeSwipeDownProps & RefAttributes<SVGSVGElement>>;

export default HandTouchThreeSwipeDown;
export { HandTouchThreeSwipeDown };
