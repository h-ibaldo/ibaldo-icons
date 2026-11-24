import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleOff: ForwardRefExoticComponent<CircleOffProps & RefAttributes<SVGSVGElement>>;

export default CircleOff;
export { CircleOff };
