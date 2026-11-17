import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftTwoFingers: ForwardRefExoticComponent<HandSwipeLeftTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftTwoFingers;
export { HandSwipeLeftTwoFingers };
