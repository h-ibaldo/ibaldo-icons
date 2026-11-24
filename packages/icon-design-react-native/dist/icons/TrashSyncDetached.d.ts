import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashSyncDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashSyncDetached: ForwardRefExoticComponent<TrashSyncDetachedProps & RefAttributes<Svg>>;

export default TrashSyncDetached;
export { TrashSyncDetached };
