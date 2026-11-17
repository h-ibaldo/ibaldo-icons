import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckDash: ForwardRefExoticComponent<BellCheckDashProps & RefAttributes<SVGSVGElement>>;

export default BellCheckDash;
export { BellCheckDash };
