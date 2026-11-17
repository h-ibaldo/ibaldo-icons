import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunStarHalfSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunStarHalfSettings: ForwardRefExoticComponent<SunStarHalfSettingsProps & RefAttributes<SVGSVGElement>>;

export default SunStarHalfSettings;
export { SunStarHalfSettings };
