import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckCircleRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckCircleRim: ForwardRefExoticComponent<BellCheckCircleRimProps & RefAttributes<SVGSVGElement>>;

export default BellCheckCircleRim;
export { BellCheckCircleRim };
