import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDivergeSixProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDivergeSix: ForwardRefExoticComponent<ArrowDivergeSixProps & RefAttributes<SVGSVGElement>>;

export default ArrowDivergeSix;
export { ArrowDivergeSix };
