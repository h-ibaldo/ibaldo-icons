import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotAdd: ForwardRefExoticComponent<LinkPersonalHotspotAddProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotAdd;
export { LinkPersonalHotspotAdd };
