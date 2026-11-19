import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSettingsBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSettingsBare: ForwardRefExoticComponent<WindowSettingsBareProps & RefAttributes<Svg>>;

export default WindowSettingsBare;
export { WindowSettingsBare };
