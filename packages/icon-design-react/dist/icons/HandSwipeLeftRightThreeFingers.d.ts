import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftRightThreeFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftRightThreeFingers: ForwardRefExoticComponent<HandSwipeLeftRightThreeFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftRightThreeFingers;
export { HandSwipeLeftRightThreeFingers };
