import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontal: ForwardRefExoticComponent<ChartBarHorizontalProps & RefAttributes<Svg>>;

export default ChartBarHorizontal;
export { ChartBarHorizontal };
