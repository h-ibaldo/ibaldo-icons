import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeDownFourFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeDownFourFingers: ForwardRefExoticComponent<HandSwipeDownFourFingersProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeDownFourFingers;
export { HandSwipeDownFourFingers };
