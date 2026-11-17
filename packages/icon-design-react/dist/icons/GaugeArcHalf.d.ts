import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeArcHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeArcHalf: ForwardRefExoticComponent<GaugeArcHalfProps & RefAttributes<SVGSVGElement>>;

export default GaugeArcHalf;
export { GaugeArcHalf };
