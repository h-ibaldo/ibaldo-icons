import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotSidesStemLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotSidesStemLarge: ForwardRefExoticComponent<HotspotSidesStemLargeProps & RefAttributes<SVGSVGElement>>;

export default HotspotSidesStemLarge;
export { HotspotSidesStemLarge };
