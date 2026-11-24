import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotStemLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotStemLarge: ForwardRefExoticComponent<HotspotStemLargeProps & RefAttributes<SVGSVGElement>>;

export default HotspotStemLarge;
export { HotspotStemLarge };
