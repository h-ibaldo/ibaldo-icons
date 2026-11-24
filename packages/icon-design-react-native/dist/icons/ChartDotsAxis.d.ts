import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartDotsAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartDotsAxis: ForwardRefExoticComponent<ChartDotsAxisProps & RefAttributes<Svg>>;

export default ChartDotsAxis;
export { ChartDotsAxis };
