import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCircleOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCircleOff: ForwardRefExoticComponent<BellCircleOffProps & RefAttributes<SVGSVGElement>>;

export default BellCircleOff;
export { BellCircleOff };
