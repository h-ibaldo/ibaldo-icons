import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeThreeQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeThreeQuarter: ForwardRefExoticComponent<GaugeThreeQuarterProps & RefAttributes<SVGSVGElement>>;

export default GaugeThreeQuarter;
export { GaugeThreeQuarter };
