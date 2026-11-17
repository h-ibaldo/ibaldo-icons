import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftRightFourFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftRightFourFingers: ForwardRefExoticComponent<HandSwipeLeftRightFourFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftRightFourFingers;
export { HandSwipeLeftRightFourFingers };
