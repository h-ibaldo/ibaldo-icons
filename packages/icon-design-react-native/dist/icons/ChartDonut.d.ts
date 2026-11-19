import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartDonutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartDonut: ForwardRefExoticComponent<ChartDonutProps & RefAttributes<Svg>>;

export default ChartDonut;
export { ChartDonut };
