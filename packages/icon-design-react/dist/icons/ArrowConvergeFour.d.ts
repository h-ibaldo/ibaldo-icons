import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowConvergeFourProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowConvergeFour: ForwardRefExoticComponent<ArrowConvergeFourProps & RefAttributes<SVGSVGElement>>;

export default ArrowConvergeFour;
export { ArrowConvergeFour };
