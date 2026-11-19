import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashEmptyNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashEmptyNotch: ForwardRefExoticComponent<TrashEmptyNotchProps & RefAttributes<Svg>>;

export default TrashEmptyNotch;
export { TrashEmptyNotch };
