import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeOpen: ForwardRefExoticComponent<GaugeOpenProps & RefAttributes<SVGSVGElement>>;

export default GaugeOpen;
export { GaugeOpen };
