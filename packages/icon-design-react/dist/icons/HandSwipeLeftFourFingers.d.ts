import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftFourFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftFourFingers: ForwardRefExoticComponent<HandSwipeLeftFourFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftFourFingers;
export { HandSwipeLeftFourFingers };
