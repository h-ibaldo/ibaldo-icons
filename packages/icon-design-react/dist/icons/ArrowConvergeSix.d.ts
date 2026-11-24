import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowConvergeSixProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowConvergeSix: ForwardRefExoticComponent<ArrowConvergeSixProps & RefAttributes<SVGSVGElement>>;

export default ArrowConvergeSix;
export { ArrowConvergeSix };
