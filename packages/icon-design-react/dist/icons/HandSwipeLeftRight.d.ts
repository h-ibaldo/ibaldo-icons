import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftRight: ForwardRefExoticComponent<HandSwipeLeftRightProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftRight;
export { HandSwipeLeftRight };
