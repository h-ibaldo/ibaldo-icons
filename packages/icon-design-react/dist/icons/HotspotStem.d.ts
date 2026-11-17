import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotStemProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotStem: ForwardRefExoticComponent<HotspotStemProps & RefAttributes<SVGSVGElement>>;

export default HotspotStem;
export { HotspotStem };
