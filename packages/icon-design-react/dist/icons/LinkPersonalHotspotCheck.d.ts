import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotCheck: ForwardRefExoticComponent<LinkPersonalHotspotCheckProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotCheck;
export { LinkPersonalHotspotCheck };
