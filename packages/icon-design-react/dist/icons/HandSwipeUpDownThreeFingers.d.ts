import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpDownThreeFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUpDownThreeFingers: ForwardRefExoticComponent<HandSwipeUpDownThreeFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUpDownThreeFingers;
export { HandSwipeUpDownThreeFingers };
