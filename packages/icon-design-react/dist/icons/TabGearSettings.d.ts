import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabGearSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabGearSettings: ForwardRefExoticComponent<TabGearSettingsProps & RefAttributes<SVGSVGElement>>;

export default TabGearSettings;
export { TabGearSettings };
