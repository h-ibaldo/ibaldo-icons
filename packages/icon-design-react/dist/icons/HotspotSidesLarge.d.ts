import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotSidesLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotSidesLarge: ForwardRefExoticComponent<HotspotSidesLargeProps & RefAttributes<SVGSVGElement>>;

export default HotspotSidesLarge;
export { HotspotSidesLarge };
