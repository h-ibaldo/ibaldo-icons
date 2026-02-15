import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotCheckCheckedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotCheckChecked: ForwardRefExoticComponent<LinkPersonalHotspotCheckCheckedProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotCheckChecked;
export { LinkPersonalHotspotCheckChecked };
