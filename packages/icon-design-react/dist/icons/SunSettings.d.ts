import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunSettings: ForwardRefExoticComponent<SunSettingsProps & RefAttributes<SVGSVGElement>>;

export default SunSettings;
export { SunSettings };
