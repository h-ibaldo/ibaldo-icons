import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashBan: ForwardRefExoticComponent<TrashBanProps & RefAttributes<Svg>>;

export default TrashBan;
export { TrashBan };
