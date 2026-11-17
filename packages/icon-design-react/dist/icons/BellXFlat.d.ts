import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXFlat: ForwardRefExoticComponent<BellXFlatProps & RefAttributes<SVGSVGElement>>;

export default BellXFlat;
export { BellXFlat };
