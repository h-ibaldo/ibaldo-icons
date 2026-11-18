import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDropThreeQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDropThreeQuarter: ForwardRefExoticComponent<GaugeDropThreeQuarterProps & RefAttributes<SVGSVGElement>>;

export default GaugeDropThreeQuarter;
export { GaugeDropThreeQuarter };
