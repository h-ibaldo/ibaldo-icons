import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeDownThreeFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeDownThreeFingers: ForwardRefExoticComponent<HandSwipeDownThreeFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeDownThreeFingers;
export { HandSwipeDownThreeFingers };
