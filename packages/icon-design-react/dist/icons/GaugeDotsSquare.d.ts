import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDotsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDotsSquare: ForwardRefExoticComponent<GaugeDotsSquareProps & RefAttributes<SVGSVGElement>>;

export default GaugeDotsSquare;
export { GaugeDotsSquare };
