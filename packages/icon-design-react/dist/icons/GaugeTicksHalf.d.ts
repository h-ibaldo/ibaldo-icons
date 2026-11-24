import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTicksHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTicksHalf: ForwardRefExoticComponent<GaugeTicksHalfProps & RefAttributes<SVGSVGElement>>;

export default GaugeTicksHalf;
export { GaugeTicksHalf };
