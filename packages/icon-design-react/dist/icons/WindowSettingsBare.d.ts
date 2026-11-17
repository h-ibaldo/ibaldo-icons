import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSettingsBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSettingsBare: ForwardRefExoticComponent<WindowSettingsBareProps & RefAttributes<SVGSVGElement>>;

export default WindowSettingsBare;
export { WindowSettingsBare };
