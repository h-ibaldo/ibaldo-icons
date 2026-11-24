import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSettingsCenterNotchPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenterNotchPlain: ForwardRefExoticComponent<WindowSettingsCenterNotchPlainProps & RefAttributes<Svg>>;

export default WindowSettingsCenterNotchPlain;
export { WindowSettingsCenterNotchPlain };
