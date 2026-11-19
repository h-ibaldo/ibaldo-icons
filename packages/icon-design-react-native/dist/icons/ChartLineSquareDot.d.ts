import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareDot: ForwardRefExoticComponent<ChartLineSquareDotProps & RefAttributes<Svg>>;

export default ChartLineSquareDot;
export { ChartLineSquareDot };
