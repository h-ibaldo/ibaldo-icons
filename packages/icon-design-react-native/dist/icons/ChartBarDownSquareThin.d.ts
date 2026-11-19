import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarDownSquareThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarDownSquareThin: ForwardRefExoticComponent<ChartBarDownSquareThinProps & RefAttributes<Svg>>;

export default ChartBarDownSquareThin;
export { ChartBarDownSquareThin };
