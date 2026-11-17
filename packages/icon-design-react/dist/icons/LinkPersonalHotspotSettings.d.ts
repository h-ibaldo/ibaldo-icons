import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPersonalHotspotSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPersonalHotspotSettings: ForwardRefExoticComponent<LinkPersonalHotspotSettingsProps & RefAttributes<SVGSVGElement>>;

export default LinkPersonalHotspotSettings;
export { LinkPersonalHotspotSettings };
