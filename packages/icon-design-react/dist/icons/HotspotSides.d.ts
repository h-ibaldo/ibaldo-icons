import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotSidesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotSides: ForwardRefExoticComponent<HotspotSidesProps & RefAttributes<SVGSVGElement>>;

export default HotspotSides;
export { HotspotSides };
