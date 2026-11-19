import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatCompactOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatCompactOff: ForwardRefExoticComponent<ArrowRepeatCompactOffProps & RefAttributes<Svg>>;

export default ArrowRepeatCompactOff;
export { ArrowRepeatCompactOff };
