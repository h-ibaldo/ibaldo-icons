import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUpTwoFingers: ForwardRefExoticComponent<HandSwipeUpTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUpTwoFingers;
export { HandSwipeUpTwoFingers };
