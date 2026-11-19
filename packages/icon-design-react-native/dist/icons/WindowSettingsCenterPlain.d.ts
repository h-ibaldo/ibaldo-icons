import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSettingsCenterPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenterPlain: ForwardRefExoticComponent<WindowSettingsCenterPlainProps & RefAttributes<Svg>>;

export default WindowSettingsCenterPlain;
export { WindowSettingsCenterPlain };
