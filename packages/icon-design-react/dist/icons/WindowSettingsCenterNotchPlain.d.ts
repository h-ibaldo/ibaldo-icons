import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSettingsCenterNotchPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSettingsCenterNotchPlain: ForwardRefExoticComponent<WindowSettingsCenterNotchPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSettingsCenterNotchPlain;
export { WindowSettingsCenterNotchPlain };
