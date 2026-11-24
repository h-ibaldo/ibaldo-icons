import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckFlat: ForwardRefExoticComponent<BellCheckFlatProps & RefAttributes<SVGSVGElement>>;

export default BellCheckFlat;
export { BellCheckFlat };
