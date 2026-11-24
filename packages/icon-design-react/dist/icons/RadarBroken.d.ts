import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RadarBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RadarBroken: ForwardRefExoticComponent<RadarBrokenProps & RefAttributes<SVGSVGElement>>;

export default RadarBroken;
export { RadarBroken };
