import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HotspotSidesStemProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HotspotSidesStem: ForwardRefExoticComponent<HotspotSidesStemProps & RefAttributes<SVGSVGElement>>;

export default HotspotSidesStem;
export { HotspotSidesStem };
