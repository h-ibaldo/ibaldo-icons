import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashSyncNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashSyncNotch: ForwardRefExoticComponent<TrashSyncNotchProps & RefAttributes<Svg>>;

export default TrashSyncNotch;
export { TrashSyncNotch };
