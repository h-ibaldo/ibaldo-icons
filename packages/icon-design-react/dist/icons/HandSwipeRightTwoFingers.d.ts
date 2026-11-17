import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeRightTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeRightTwoFingers: ForwardRefExoticComponent<HandSwipeRightTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeRightTwoFingers;
export { HandSwipeRightTwoFingers };
