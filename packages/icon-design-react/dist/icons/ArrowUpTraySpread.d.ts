import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpTraySpreadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpTraySpread: ForwardRefExoticComponent<ArrowUpTraySpreadProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpTraySpread;
export { ArrowUpTraySpread };
