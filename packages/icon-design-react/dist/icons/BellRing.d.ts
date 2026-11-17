import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRing: ForwardRefExoticComponent<BellRingProps & RefAttributes<SVGSVGElement>>;

export default BellRing;
export { BellRing };
