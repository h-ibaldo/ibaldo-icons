import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeDown: ForwardRefExoticComponent<HandSwipeDownProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeDown;
export { HandSwipeDown };
