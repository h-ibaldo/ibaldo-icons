import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarStriped: ForwardRefExoticComponent<SunStarStripedProps & RefAttributes<SVGSVGElement>>;

export default SunStarStriped;
export { SunStarStriped };
