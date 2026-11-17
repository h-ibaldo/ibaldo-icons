import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleCrescentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleCrescent: ForwardRefExoticComponent<CircleCrescentProps & RefAttributes<SVGSVGElement>>;

export default CircleCrescent;
export { CircleCrescent };
