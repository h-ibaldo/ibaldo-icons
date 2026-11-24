import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSettings: ForwardRefExoticComponent<WindowSettingsProps & RefAttributes<SVGSVGElement>>;

export default WindowSettings;
export { WindowSettings };
