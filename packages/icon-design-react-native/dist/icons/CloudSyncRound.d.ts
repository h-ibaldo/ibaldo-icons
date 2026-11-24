import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSyncRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSyncRound: ForwardRefExoticComponent<CloudSyncRoundProps & RefAttributes<Svg>>;

export default CloudSyncRound;
export { CloudSyncRound };
