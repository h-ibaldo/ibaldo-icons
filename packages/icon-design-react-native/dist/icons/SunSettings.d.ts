import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunSettings: ForwardRefExoticComponent<SunSettingsProps & RefAttributes<Svg>>;

export default SunSettings;
export { SunSettings };
