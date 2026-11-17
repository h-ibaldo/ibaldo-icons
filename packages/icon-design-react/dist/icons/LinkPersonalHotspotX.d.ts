import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotX: ForwardRefExoticComponent<LinkPersonalHotspotXProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotX;
export { LinkPersonalHotspotX };
