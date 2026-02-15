import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotMenuSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotMenuSettings: ForwardRefExoticComponent<LinkPersonalHotspotMenuSettingsProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotMenuSettings;
export { LinkPersonalHotspotMenuSettings };
