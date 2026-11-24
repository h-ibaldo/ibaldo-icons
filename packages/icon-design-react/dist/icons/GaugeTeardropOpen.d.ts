import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropOpen: ForwardRefExoticComponent<GaugeTeardropOpenProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropOpen;
export { GaugeTeardropOpen };
