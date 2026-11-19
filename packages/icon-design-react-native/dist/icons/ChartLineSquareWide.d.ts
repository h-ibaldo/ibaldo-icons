import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineSquareWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareWide: ForwardRefExoticComponent<ChartLineSquareWideProps & RefAttributes<Svg>>;

export default ChartLineSquareWide;
export { ChartLineSquareWide };
