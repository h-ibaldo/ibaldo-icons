import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightnessSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightnessSettings: ForwardRefExoticComponent<SunBrightnessSettingsProps & RefAttributes<SVGSVGElement>>;

export default SunBrightnessSettings;
export { SunBrightnessSettings };
