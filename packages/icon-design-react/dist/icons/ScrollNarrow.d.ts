import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScrollNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScrollNarrow: ForwardRefExoticComponent<ScrollNarrowProps & RefAttributes<SVGSVGElement>>;

export default ScrollNarrow;
export { ScrollNarrow };
