import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserCloudSunProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserCloudSun: ForwardRefExoticComponent<BrowserCloudSunProps & RefAttributes<Svg>>;

export default BrowserCloudSun;
export { BrowserCloudSun };
