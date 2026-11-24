import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSettings: ForwardRefExoticComponent<WindowSettingsProps & RefAttributes<Svg>>;

export default WindowSettings;
export { WindowSettings };
