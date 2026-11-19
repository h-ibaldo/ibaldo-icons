import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashNarrow: ForwardRefExoticComponent<TrashNarrowProps & RefAttributes<Svg>>;

export default TrashNarrow;
export { TrashNarrow };
