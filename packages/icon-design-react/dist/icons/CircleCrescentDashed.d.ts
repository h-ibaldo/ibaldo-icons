import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleCrescentDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleCrescentDashed: ForwardRefExoticComponent<CircleCrescentDashedProps & RefAttributes<SVGSVGElement>>;

export default CircleCrescentDashed;
export { CircleCrescentDashed };
