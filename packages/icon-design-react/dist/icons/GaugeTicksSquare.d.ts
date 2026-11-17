import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTicksSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTicksSquare: ForwardRefExoticComponent<GaugeTicksSquareProps & RefAttributes<SVGSVGElement>>;

export default GaugeTicksSquare;
export { GaugeTicksSquare };
