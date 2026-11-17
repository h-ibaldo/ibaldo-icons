import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropTicksSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropTicksSquare: ForwardRefExoticComponent<GaugeTeardropTicksSquareProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropTicksSquare;
export { GaugeTeardropTicksSquare };
