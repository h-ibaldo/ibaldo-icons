import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropHalf: ForwardRefExoticComponent<GaugeTeardropHalfProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropHalf;
export { GaugeTeardropHalf };
