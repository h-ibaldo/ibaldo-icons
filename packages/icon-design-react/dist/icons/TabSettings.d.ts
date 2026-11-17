import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabSettings: ForwardRefExoticComponent<TabSettingsProps & RefAttributes<SVGSVGElement>>;

export default TabSettings;
export { TabSettings };
