import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RestoreSyncCounterclockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RestoreSyncCounterclockwise: ForwardRefExoticComponent<RestoreSyncCounterclockwiseProps & RefAttributes<Svg>>;

export default RestoreSyncCounterclockwise;
export { RestoreSyncCounterclockwise };
