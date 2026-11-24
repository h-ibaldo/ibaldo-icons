import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotDotsLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotDotsLarge: ForwardRefExoticComponent<HotspotDotsLargeProps & RefAttributes<SVGSVGElement>>;

export default HotspotDotsLarge;
export { HotspotDotsLarge };
