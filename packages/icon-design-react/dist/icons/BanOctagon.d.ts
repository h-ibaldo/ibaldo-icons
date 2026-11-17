import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanOctagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanOctagon: ForwardRefExoticComponent<BanOctagonProps & RefAttributes<SVGSVGElement>>;

export default BanOctagon;
export { BanOctagon };
