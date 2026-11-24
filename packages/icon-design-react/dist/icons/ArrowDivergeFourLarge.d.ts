import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDivergeFourLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDivergeFourLarge: ForwardRefExoticComponent<ArrowDivergeFourLargeProps & RefAttributes<SVGSVGElement>>;

export default ArrowDivergeFourLarge;
export { ArrowDivergeFourLarge };
