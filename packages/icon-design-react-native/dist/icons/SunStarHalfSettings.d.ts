import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunStarHalfSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunStarHalfSettings: ForwardRefExoticComponent<SunStarHalfSettingsProps & RefAttributes<Svg>>;

export default SunStarHalfSettings;
export { SunStarHalfSettings };
