import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTicksSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTicksSplit: ForwardRefExoticComponent<GaugeTicksSplitProps & RefAttributes<SVGSVGElement>>;

export default GaugeTicksSplit;
export { GaugeTicksSplit };
