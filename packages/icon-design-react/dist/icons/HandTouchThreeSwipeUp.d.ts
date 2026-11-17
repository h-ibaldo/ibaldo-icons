import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchThreeSwipeUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchThreeSwipeUp: ForwardRefExoticComponent<HandTouchThreeSwipeUpProps & RefAttributes<SVGSVGElement>>;

export default HandTouchThreeSwipeUp;
export { HandTouchThreeSwipeUp };
