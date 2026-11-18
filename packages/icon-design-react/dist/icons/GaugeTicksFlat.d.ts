import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTicksFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTicksFlat: ForwardRefExoticComponent<GaugeTicksFlatProps & RefAttributes<SVGSVGElement>>;

export default GaugeTicksFlat;
export { GaugeTicksFlat };
