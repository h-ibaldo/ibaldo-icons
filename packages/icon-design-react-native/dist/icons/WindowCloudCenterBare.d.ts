import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCloudCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCloudCenterBare: ForwardRefExoticComponent<WindowCloudCenterBareProps & RefAttributes<Svg>>;

export default WindowCloudCenterBare;
export { WindowCloudCenterBare };
