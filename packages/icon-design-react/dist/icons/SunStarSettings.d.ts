import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarSettings: ForwardRefExoticComponent<SunStarSettingsProps & RefAttributes<SVGSVGElement>>;

export default SunStarSettings;
export { SunStarSettings };
