import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopSettingsFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopSettingsFlat: ForwardRefExoticComponent<LaptopSettingsFlatProps & RefAttributes<SVGSVGElement>>;

export default LaptopSettingsFlat;
export { LaptopSettingsFlat };
