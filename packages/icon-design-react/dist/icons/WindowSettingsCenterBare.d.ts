import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSettingsCenterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSettingsCenterBare: ForwardRefExoticComponent<WindowSettingsCenterBareProps & RefAttributes<SVGSVGElement>>;

export default WindowSettingsCenterBare;
export { WindowSettingsCenterBare };
