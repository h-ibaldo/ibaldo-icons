import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingersSwipeUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingersSwipeUp: ForwardRefExoticComponent<HandTwoFingersSwipeUpProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingersSwipeUp;
export { HandTwoFingersSwipeUp };
