import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarStripedSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarStripedSettings: ForwardRefExoticComponent<SunStarStripedSettingsProps & RefAttributes<Svg>>;

export default SunStarStripedSettings;
export { SunStarStripedSettings };
