import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarArrowRight: ForwardRefExoticComponent<ChartBarArrowRightProps & RefAttributes<Svg>>;

export default ChartBarArrowRight;
export { ChartBarArrowRight };
