import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScrollTextNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScrollTextNarrow: ForwardRefExoticComponent<ScrollTextNarrowProps & RefAttributes<SVGSVGElement>>;

export default ScrollTextNarrow;
export { ScrollTextNarrow };
