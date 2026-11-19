import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSync: ForwardRefExoticComponent<CloudSyncProps & RefAttributes<Svg>>;

export default CloudSync;
export { CloudSync };
