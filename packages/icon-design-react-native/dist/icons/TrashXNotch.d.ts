import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashXNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashXNotch: ForwardRefExoticComponent<TrashXNotchProps & RefAttributes<Svg>>;

export default TrashXNotch;
export { TrashXNotch };
