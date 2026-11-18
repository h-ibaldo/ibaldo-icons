import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeArcSemicircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeArcSemicircle: ForwardRefExoticComponent<GaugeArcSemicircleProps & RefAttributes<SVGSVGElement>>;

export default GaugeArcSemicircle;
export { GaugeArcSemicircle };
