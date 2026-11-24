import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUpDown: ForwardRefExoticComponent<HandSwipeUpDownProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUpDown;
export { HandSwipeUpDown };
