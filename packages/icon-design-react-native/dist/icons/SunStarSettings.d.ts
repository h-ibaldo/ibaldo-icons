import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarSettings: ForwardRefExoticComponent<SunStarSettingsProps & RefAttributes<Svg>>;

export default SunStarSettings;
export { SunStarSettings };
