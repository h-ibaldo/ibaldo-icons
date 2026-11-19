import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatCompact: ForwardRefExoticComponent<ArrowRepeatCompactProps & RefAttributes<Svg>>;

export default ArrowRepeatCompact;
export { ArrowRepeatCompact };
