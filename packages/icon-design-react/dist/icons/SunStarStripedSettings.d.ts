import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarStripedSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarStripedSettings: ForwardRefExoticComponent<SunStarStripedSettingsProps & RefAttributes<SVGSVGElement>>;

export default SunStarStripedSettings;
export { SunStarStripedSettings };
