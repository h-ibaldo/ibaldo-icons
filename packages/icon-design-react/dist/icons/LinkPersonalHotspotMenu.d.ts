import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotMenu: ForwardRefExoticComponent<LinkPersonalHotspotMenuProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotMenu;
export { LinkPersonalHotspotMenu };
