import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartCandlestickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartCandlestick: ForwardRefExoticComponent<ChartCandlestickProps & RefAttributes<Svg>>;

export default ChartCandlestick;
export { ChartCandlestick };
