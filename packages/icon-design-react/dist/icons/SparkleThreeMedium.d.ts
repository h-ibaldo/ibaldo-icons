import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparkleThreeMediumProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparkleThreeMedium: ForwardRefExoticComponent<SparkleThreeMediumProps & RefAttributes<SVGSVGElement>>;

export default SparkleThreeMedium;
export { SparkleThreeMedium };
