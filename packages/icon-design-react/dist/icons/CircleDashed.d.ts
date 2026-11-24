import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleDashed: ForwardRefExoticComponent<CircleDashedProps & RefAttributes<SVGSVGElement>>;

export default CircleDashed;
export { CircleDashed };
