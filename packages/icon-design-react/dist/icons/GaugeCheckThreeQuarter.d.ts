import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeCheckThreeQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeCheckThreeQuarter: ForwardRefExoticComponent<GaugeCheckThreeQuarterProps & RefAttributes<SVGSVGElement>>;

export default GaugeCheckThreeQuarter;
export { GaugeCheckThreeQuarter };
