import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashBanDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashBanDetached: ForwardRefExoticComponent<TrashBanDetachedProps & RefAttributes<Svg>>;

export default TrashBanDetached;
export { TrashBanDetached };
