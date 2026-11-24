import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSquareDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSquareDash: ForwardRefExoticComponent<BellSquareDashProps & RefAttributes<SVGSVGElement>>;

export default BellSquareDash;
export { BellSquareDash };
