import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatOneCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatOneCurved: ForwardRefExoticComponent<ArrowRepeatOneCurvedProps & RefAttributes<Svg>>;

export default ArrowRepeatOneCurved;
export { ArrowRepeatOneCurved };
