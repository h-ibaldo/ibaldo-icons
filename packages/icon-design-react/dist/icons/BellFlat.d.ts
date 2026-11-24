import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellFlat: ForwardRefExoticComponent<BellFlatProps & RefAttributes<SVGSVGElement>>;

export default BellFlat;
export { BellFlat };
