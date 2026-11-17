import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchThreeSwipeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchThreeSwipeRight: ForwardRefExoticComponent<HandTouchThreeSwipeRightProps & RefAttributes<SVGSVGElement>>;

export default HandTouchThreeSwipeRight;
export { HandTouchThreeSwipeRight };
