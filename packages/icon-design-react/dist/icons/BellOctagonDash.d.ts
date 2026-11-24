import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOctagonDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOctagonDash: ForwardRefExoticComponent<BellOctagonDashProps & RefAttributes<SVGSVGElement>>;

export default BellOctagonDash;
export { BellOctagonDash };
