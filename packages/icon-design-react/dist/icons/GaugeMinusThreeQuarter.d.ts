import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeMinusThreeQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeMinusThreeQuarter: ForwardRefExoticComponent<GaugeMinusThreeQuarterProps & RefAttributes<SVGSVGElement>>;

export default GaugeMinusThreeQuarter;
export { GaugeMinusThreeQuarter };
