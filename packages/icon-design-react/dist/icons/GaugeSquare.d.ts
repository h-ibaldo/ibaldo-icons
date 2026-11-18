import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeSquare: ForwardRefExoticComponent<GaugeSquareProps & RefAttributes<SVGSVGElement>>;

export default GaugeSquare;
export { GaugeSquare };
