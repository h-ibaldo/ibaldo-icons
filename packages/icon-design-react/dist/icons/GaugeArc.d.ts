import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeArc: ForwardRefExoticComponent<GaugeArcProps & RefAttributes<SVGSVGElement>>;

export default GaugeArc;
export { GaugeArc };
