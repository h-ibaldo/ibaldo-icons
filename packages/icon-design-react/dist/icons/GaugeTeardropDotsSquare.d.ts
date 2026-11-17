import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropDotsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropDotsSquare: ForwardRefExoticComponent<GaugeTeardropDotsSquareProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropDotsSquare;
export { GaugeTeardropDotsSquare };
