import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeXThreeQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeXThreeQuarter: ForwardRefExoticComponent<GaugeXThreeQuarterProps & RefAttributes<SVGSVGElement>>;

export default GaugeXThreeQuarter;
export { GaugeXThreeQuarter };
