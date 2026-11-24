import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartCandlestickTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartCandlestickTwo: ForwardRefExoticComponent<ChartCandlestickTwoProps & RefAttributes<Svg>>;

export default ChartCandlestickTwo;
export { ChartCandlestickTwo };
