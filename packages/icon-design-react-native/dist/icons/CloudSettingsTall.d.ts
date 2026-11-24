import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSettingsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSettingsTall: ForwardRefExoticComponent<CloudSettingsTallProps & RefAttributes<Svg>>;

export default CloudSettingsTall;
export { CloudSettingsTall };
