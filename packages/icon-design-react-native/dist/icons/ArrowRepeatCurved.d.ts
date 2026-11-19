import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatCurved: ForwardRefExoticComponent<ArrowRepeatCurvedProps & RefAttributes<Svg>>;

export default ArrowRepeatCurved;
export { ArrowRepeatCurved };
