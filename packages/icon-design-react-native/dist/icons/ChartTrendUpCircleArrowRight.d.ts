import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartTrendUpCircleArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircleArrowRight: ForwardRefExoticComponent<ChartTrendUpCircleArrowRightProps & RefAttributes<Svg>>;

export default ChartTrendUpCircleArrowRight;
export { ChartTrendUpCircleArrowRight };
