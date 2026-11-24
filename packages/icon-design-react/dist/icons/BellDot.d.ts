import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellDot: ForwardRefExoticComponent<BellDotProps & RefAttributes<SVGSVGElement>>;

export default BellDot;
export { BellDot };
