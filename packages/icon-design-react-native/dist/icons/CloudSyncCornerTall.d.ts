import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSyncCornerTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSyncCornerTall: ForwardRefExoticComponent<CloudSyncCornerTallProps & RefAttributes<Svg>>;

export default CloudSyncCornerTall;
export { CloudSyncCornerTall };
