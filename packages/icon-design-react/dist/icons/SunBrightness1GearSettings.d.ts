import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness1GearSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness1GearSettings: ForwardRefExoticComponent<SunBrightness1GearSettingsProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness1GearSettings;
export { SunBrightness1GearSettings };
