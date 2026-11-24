import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SprayCanLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SprayCanLines: ForwardRefExoticComponent<SprayCanLinesProps & RefAttributes<SVGSVGElement>>;

export default SprayCanLines;
export { SprayCanLines };
