import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropCurved: ForwardRefExoticComponent<GaugeTeardropCurvedProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropCurved;
export { GaugeTeardropCurved };
