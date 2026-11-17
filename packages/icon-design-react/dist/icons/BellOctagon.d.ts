import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOctagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOctagon: ForwardRefExoticComponent<BellOctagonProps & RefAttributes<SVGSVGElement>>;

export default BellOctagon;
export { BellOctagon };
