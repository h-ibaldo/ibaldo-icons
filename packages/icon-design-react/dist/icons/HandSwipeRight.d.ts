import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeRight: ForwardRefExoticComponent<HandSwipeRightProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeRight;
export { HandSwipeRight };
