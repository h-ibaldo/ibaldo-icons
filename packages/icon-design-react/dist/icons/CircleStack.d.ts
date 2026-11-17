import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleStack: ForwardRefExoticComponent<CircleStackProps & RefAttributes<SVGSVGElement>>;

export default CircleStack;
export { CircleStack };
