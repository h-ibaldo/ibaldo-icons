import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RewindProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Rewind: ForwardRefExoticComponent<RewindProps & RefAttributes<Svg>>;

export default Rewind;
export { Rewind };
