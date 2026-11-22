import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartSplineAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartSplineAxis: ForwardRefExoticComponent<ChartSplineAxisProps & RefAttributes<Svg>>;

export default ChartSplineAxis;
export { ChartSplineAxis };
