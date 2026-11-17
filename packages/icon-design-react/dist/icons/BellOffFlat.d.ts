import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOffFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOffFlat: ForwardRefExoticComponent<BellOffFlatProps & RefAttributes<SVGSVGElement>>;

export default BellOffFlat;
export { BellOffFlat };
