import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeDownTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeDownTwoFingers: ForwardRefExoticComponent<HandSwipeDownTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeDownTwoFingers;
export { HandSwipeDownTwoFingers };
