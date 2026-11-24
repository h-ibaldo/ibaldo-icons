import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOffDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOffDash: ForwardRefExoticComponent<BellOffDashProps & RefAttributes<SVGSVGElement>>;

export default BellOffDash;
export { BellOffDash };
