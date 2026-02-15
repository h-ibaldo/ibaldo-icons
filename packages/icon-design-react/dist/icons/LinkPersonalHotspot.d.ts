import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspot: ForwardRefExoticComponent<LinkPersonalHotspotProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspot;
export { LinkPersonalHotspot };
