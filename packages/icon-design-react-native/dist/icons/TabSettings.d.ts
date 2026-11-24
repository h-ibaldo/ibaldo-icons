import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabSettings: ForwardRefExoticComponent<TabSettingsProps & RefAttributes<Svg>>;

export default TabSettings;
export { TabSettings };
