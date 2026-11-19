import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSyncCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSyncCornerRound: ForwardRefExoticComponent<CloudSyncCornerRoundProps & RefAttributes<Svg>>;

export default CloudSyncCornerRound;
export { CloudSyncCornerRound };
