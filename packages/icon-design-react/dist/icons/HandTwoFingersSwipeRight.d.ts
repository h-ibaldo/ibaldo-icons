import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingersSwipeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingersSwipeRight: ForwardRefExoticComponent<HandTwoFingersSwipeRightProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingersSwipeRight;
export { HandTwoFingersSwipeRight };
