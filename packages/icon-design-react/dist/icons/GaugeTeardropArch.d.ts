import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTeardropArchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTeardropArch: ForwardRefExoticComponent<GaugeTeardropArchProps & RefAttributes<SVGSVGElement>>;

export default GaugeTeardropArch;
export { GaugeTeardropArch };
