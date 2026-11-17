import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpDownTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUpDownTwoFingers: ForwardRefExoticComponent<HandSwipeUpDownTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUpDownTwoFingers;
export { HandSwipeUpDownTwoFingers };
