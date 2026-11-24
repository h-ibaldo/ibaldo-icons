import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WifiSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WifiSettings: ForwardRefExoticComponent<WifiSettingsProps & RefAttributes<Svg>>;

export default WifiSettings;
export { WifiSettings };
