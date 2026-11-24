import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpFourFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUpFourFingers: ForwardRefExoticComponent<HandSwipeUpFourFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUpFourFingers;
export { HandSwipeUpFourFingers };
