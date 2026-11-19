import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashDetached: ForwardRefExoticComponent<TrashDetachedProps & RefAttributes<Svg>>;

export default TrashDetached;
export { TrashDetached };
