import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellDotFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellDotFlat: ForwardRefExoticComponent<BellDotFlatProps & RefAttributes<SVGSVGElement>>;

export default BellDotFlat;
export { BellDotFlat };
