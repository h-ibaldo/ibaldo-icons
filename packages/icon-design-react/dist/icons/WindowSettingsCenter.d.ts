import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSettingsCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSettingsCenter: ForwardRefExoticComponent<WindowSettingsCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowSettingsCenter;
export { WindowSettingsCenter };
