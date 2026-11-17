import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LaptopSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LaptopSettings: ForwardRefExoticComponent<LaptopSettingsProps & RefAttributes<SVGSVGElement>>;

export default LaptopSettings;
export { LaptopSettings };
