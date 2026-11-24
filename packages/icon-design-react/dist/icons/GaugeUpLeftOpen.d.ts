import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeUpLeftOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeUpLeftOpen: ForwardRefExoticComponent<GaugeUpLeftOpenProps & RefAttributes<SVGSVGElement>>;

export default GaugeUpLeftOpen;
export { GaugeUpLeftOpen };
