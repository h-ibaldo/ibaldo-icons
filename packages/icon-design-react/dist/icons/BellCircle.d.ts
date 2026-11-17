import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCircle: ForwardRefExoticComponent<BellCircleProps & RefAttributes<SVGSVGElement>>;

export default BellCircle;
export { BellCircle };
