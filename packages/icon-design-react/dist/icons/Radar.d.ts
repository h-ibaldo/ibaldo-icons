import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RadarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Radar: ForwardRefExoticComponent<RadarProps & RefAttributes<SVGSVGElement>>;

export default Radar;
export { Radar };
