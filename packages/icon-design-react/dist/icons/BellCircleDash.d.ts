import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCircleDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCircleDash: ForwardRefExoticComponent<BellCircleDashProps & RefAttributes<SVGSVGElement>>;

export default BellCircleDash;
export { BellCircleDash };
