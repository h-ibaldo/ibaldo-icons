import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoltOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoltOff: ForwardRefExoticComponent<BoltOffProps & RefAttributes<SVGSVGElement>>;

export default BoltOff;
export { BoltOff };
