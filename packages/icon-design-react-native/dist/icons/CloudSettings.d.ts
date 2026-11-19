import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSettings: ForwardRefExoticComponent<CloudSettingsProps & RefAttributes<Svg>>;

export default CloudSettings;
export { CloudSettings };
