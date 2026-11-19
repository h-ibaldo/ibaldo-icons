import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineUpAxisJaggedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineUpAxisJagged: ForwardRefExoticComponent<ChartLineUpAxisJaggedProps & RefAttributes<Svg>>;

export default ChartLineUpAxisJagged;
export { ChartLineUpAxisJagged };
