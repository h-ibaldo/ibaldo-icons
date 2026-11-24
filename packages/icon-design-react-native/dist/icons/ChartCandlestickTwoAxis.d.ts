import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartCandlestickTwoAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartCandlestickTwoAxis: ForwardRefExoticComponent<ChartCandlestickTwoAxisProps & RefAttributes<Svg>>;

export default ChartCandlestickTwoAxis;
export { ChartCandlestickTwoAxis };
