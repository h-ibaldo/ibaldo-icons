import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RestoreSyncClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RestoreSyncClockwise: ForwardRefExoticComponent<RestoreSyncClockwiseProps & RefAttributes<Svg>>;

export default RestoreSyncClockwise;
export { RestoreSyncClockwise };
