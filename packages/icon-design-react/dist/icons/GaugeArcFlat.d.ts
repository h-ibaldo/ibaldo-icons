import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeArcFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeArcFlat: ForwardRefExoticComponent<GaugeArcFlatProps & RefAttributes<SVGSVGElement>>;

export default GaugeArcFlat;
export { GaugeArcFlat };
