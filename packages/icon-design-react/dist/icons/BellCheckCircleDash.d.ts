import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckCircleDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckCircleDash: ForwardRefExoticComponent<BellCheckCircleDashProps & RefAttributes<SVGSVGElement>>;

export default BellCheckCircleDash;
export { BellCheckCircleDash };
