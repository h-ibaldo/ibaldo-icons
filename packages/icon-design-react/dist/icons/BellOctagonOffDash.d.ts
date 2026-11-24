import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOctagonOffDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOctagonOffDash: ForwardRefExoticComponent<BellOctagonOffDashProps & RefAttributes<SVGSVGElement>>;

export default BellOctagonOffDash;
export { BellOctagonOffDash };
