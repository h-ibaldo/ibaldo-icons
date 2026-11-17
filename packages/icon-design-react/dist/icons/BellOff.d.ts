import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOff: ForwardRefExoticComponent<BellOffProps & RefAttributes<SVGSVGElement>>;

export default BellOff;
export { BellOff };
