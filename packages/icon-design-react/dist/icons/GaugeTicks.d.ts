import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTicksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTicks: ForwardRefExoticComponent<GaugeTicksProps & RefAttributes<SVGSVGElement>>;

export default GaugeTicks;
export { GaugeTicks };
