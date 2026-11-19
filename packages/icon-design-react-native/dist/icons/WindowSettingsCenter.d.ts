import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSettingsCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSettingsCenter: ForwardRefExoticComponent<WindowSettingsCenterProps & RefAttributes<Svg>>;

export default WindowSettingsCenter;
export { WindowSettingsCenter };
