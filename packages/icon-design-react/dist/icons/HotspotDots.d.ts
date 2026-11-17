import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotDots: ForwardRefExoticComponent<HotspotDotsProps & RefAttributes<SVGSVGElement>>;

export default HotspotDots;
export { HotspotDots };
