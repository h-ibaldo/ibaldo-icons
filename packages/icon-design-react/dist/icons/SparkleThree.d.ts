import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparkleThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparkleThree: ForwardRefExoticComponent<SparkleThreeProps & RefAttributes<SVGSVGElement>>;

export default SparkleThree;
export { SparkleThree };
