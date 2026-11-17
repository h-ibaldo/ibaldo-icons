import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotRemove: ForwardRefExoticComponent<LinkPersonalHotspotRemoveProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotRemove;
export { LinkPersonalHotspotRemove };
