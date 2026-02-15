import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotAddPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotAddPlus: ForwardRefExoticComponent<LinkPersonalHotspotAddPlusProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotAddPlus;
export { LinkPersonalHotspotAddPlus };
