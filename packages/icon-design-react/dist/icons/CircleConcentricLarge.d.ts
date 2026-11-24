import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleConcentricLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleConcentricLarge: ForwardRefExoticComponent<CircleConcentricLargeProps & RefAttributes<SVGSVGElement>>;

export default CircleConcentricLarge;
export { CircleConcentricLarge };
