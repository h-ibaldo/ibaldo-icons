import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSettingsCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSettingsCenterPlain: ForwardRefExoticComponent<WindowSettingsCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSettingsCenterPlain;
export { WindowSettingsCenterPlain };
