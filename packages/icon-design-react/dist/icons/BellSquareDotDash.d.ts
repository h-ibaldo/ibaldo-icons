import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSquareDotDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSquareDotDash: ForwardRefExoticComponent<BellSquareDotDashProps & RefAttributes<SVGSVGElement>>;

export default BellSquareDotDash;
export { BellSquareDotDash };
