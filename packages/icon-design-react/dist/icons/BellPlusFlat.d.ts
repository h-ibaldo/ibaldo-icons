import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellPlusFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellPlusFlat: ForwardRefExoticComponent<BellPlusFlatProps & RefAttributes<SVGSVGElement>>;

export default BellPlusFlat;
export { BellPlusFlat };
