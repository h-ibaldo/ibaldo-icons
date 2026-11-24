import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparkleThreeLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparkleThreeLarge: ForwardRefExoticComponent<SparkleThreeLargeProps & RefAttributes<SVGSVGElement>>;

export default SparkleThreeLarge;
export { SparkleThreeLarge };
