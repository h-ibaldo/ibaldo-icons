import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellTiltedRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellTiltedRim: ForwardRefExoticComponent<BellTiltedRimProps & RefAttributes<SVGSVGElement>>;

export default BellTiltedRim;
export { BellTiltedRim };
