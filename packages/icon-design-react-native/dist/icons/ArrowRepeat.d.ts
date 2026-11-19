import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeat: ForwardRefExoticComponent<ArrowRepeatProps & RefAttributes<Svg>>;

export default ArrowRepeat;
export { ArrowRepeat };
