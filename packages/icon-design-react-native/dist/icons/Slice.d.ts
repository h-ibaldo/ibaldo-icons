import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SliceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Slice: ForwardRefExoticComponent<SliceProps & RefAttributes<Svg>>;

export default Slice;
export { Slice };
