import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gauge: ForwardRefExoticComponent<GaugeProps & RefAttributes<SVGSVGElement>>;

export default Gauge;
export { Gauge };
