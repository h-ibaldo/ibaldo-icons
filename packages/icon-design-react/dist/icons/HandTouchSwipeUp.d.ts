import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeUp: ForwardRefExoticComponent<HandTouchSwipeUpProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeUp;
export { HandTouchSwipeUp };
