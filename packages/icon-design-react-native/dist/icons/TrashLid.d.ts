import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashLidProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashLid: ForwardRefExoticComponent<TrashLidProps & RefAttributes<Svg>>;

export default TrashLid;
export { TrashLid };
