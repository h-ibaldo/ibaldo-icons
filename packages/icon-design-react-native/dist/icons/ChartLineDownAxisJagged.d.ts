import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineDownAxisJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineDownAxisJagged: ForwardRefExoticComponent<ChartLineDownAxisJaggedProps & RefAttributes<Svg>>;

export default ChartLineDownAxisJagged;
export { ChartLineDownAxisJagged };
