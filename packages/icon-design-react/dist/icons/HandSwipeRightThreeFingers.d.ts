import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeRightThreeFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeRightThreeFingers: ForwardRefExoticComponent<HandSwipeRightThreeFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeRightThreeFingers;
export { HandSwipeRightThreeFingers };
