import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarAxisTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarAxisTwo: ForwardRefExoticComponent<ChartBarAxisTwoProps & RefAttributes<Svg>>;

export default ChartBarAxisTwo;
export { ChartBarAxisTwo };
