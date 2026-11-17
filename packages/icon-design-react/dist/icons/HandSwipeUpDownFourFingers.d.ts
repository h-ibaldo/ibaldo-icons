import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpDownFourFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUpDownFourFingers: ForwardRefExoticComponent<HandSwipeUpDownFourFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUpDownFourFingers;
export { HandSwipeUpDownFourFingers };
