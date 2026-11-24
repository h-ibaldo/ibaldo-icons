import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBar: ForwardRefExoticComponent<ChartBarProps & RefAttributes<Svg>>;

export default ChartBar;
export { ChartBar };
