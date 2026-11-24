import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparklePointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparklePointed: ForwardRefExoticComponent<SparklePointedProps & RefAttributes<SVGSVGElement>>;

export default SparklePointed;
export { SparklePointed };
