import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeHalf: ForwardRefExoticComponent<GaugeHalfProps & RefAttributes<SVGSVGElement>>;

export default GaugeHalf;
export { GaugeHalf };
