import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Hotspot: ForwardRefExoticComponent<HotspotProps & RefAttributes<SVGSVGElement>>;

export default Hotspot;
export { Hotspot };
