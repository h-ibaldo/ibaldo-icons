import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXCircleRimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXCircleRim: ForwardRefExoticComponent<BellXCircleRimProps & RefAttributes<SVGSVGElement>>;

export default BellXCircleRim;
export { BellXCircleRim };
