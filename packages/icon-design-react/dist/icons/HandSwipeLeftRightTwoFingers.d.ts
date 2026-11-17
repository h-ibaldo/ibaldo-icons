import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftRightTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftRightTwoFingers: ForwardRefExoticComponent<HandSwipeLeftRightTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftRightTwoFingers;
export { HandSwipeLeftRightTwoFingers };
