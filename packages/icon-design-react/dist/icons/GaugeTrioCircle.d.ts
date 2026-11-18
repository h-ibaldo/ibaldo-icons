import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTrioCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTrioCircle: ForwardRefExoticComponent<GaugeTrioCircleProps & RefAttributes<SVGSVGElement>>;

export default GaugeTrioCircle;
export { GaugeTrioCircle };
