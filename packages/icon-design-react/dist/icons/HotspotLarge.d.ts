import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotLarge: ForwardRefExoticComponent<HotspotLargeProps & RefAttributes<SVGSVGElement>>;

export default HotspotLarge;
export { HotspotLarge };
