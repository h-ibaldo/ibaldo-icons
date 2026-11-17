import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftThreeFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftThreeFingers: ForwardRefExoticComponent<HandSwipeLeftThreeFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftThreeFingers;
export { HandSwipeLeftThreeFingers };
