import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeArcOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeArcOpen: ForwardRefExoticComponent<GaugeArcOpenProps & RefAttributes<SVGSVGElement>>;

export default GaugeArcOpen;
export { GaugeArcOpen };
