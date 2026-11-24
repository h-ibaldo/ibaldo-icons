import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatOff: ForwardRefExoticComponent<ArrowRepeatOffProps & RefAttributes<Svg>>;

export default ArrowRepeatOff;
export { ArrowRepeatOff };
