import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarHorizontalSquareThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalSquareThin: ForwardRefExoticComponent<ChartBarHorizontalSquareThinProps & RefAttributes<Svg>>;

export default ChartBarHorizontalSquareThin;
export { ChartBarHorizontalSquareThin };
