import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeft: ForwardRefExoticComponent<HandSwipeLeftProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeft;
export { HandSwipeLeft };
