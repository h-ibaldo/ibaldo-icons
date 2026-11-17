import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingersSwipeVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingersSwipeVertical: ForwardRefExoticComponent<HandTwoFingersSwipeVerticalProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingersSwipeVertical;
export { HandTwoFingersSwipeVertical };
