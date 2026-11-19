import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartCandlestick2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartCandlestick2: ForwardRefExoticComponent<ChartCandlestick2Props & RefAttributes<Svg>>;

export default ChartCandlestick2;
export { ChartCandlestick2 };
