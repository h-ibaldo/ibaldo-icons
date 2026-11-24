import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarStackedAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarStackedAxis: ForwardRefExoticComponent<ChartBarStackedAxisProps & RefAttributes<Svg>>;

export default ChartBarStackedAxis;
export { ChartBarStackedAxis };
