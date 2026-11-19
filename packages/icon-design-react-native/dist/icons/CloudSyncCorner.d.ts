import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSyncCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSyncCorner: ForwardRefExoticComponent<CloudSyncCornerProps & RefAttributes<Svg>>;

export default CloudSyncCorner;
export { CloudSyncCorner };
