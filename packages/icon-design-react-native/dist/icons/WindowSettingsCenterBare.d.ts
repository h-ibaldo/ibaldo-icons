import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSettingsCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenterBare: ForwardRefExoticComponent<WindowSettingsCenterBareProps & RefAttributes<Svg>>;

export default WindowSettingsCenterBare;
export { WindowSettingsCenterBare };
