import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartLineWideCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartLineWideCircle: ForwardRefExoticComponent<ChartLineWideCircleProps & RefAttributes<Svg>>;

export default ChartLineWideCircle;
export { ChartLineWideCircle };
