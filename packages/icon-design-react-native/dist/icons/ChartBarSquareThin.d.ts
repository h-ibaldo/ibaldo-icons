import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareThin: ForwardRefExoticComponent<ChartBarSquareThinProps & RefAttributes<Svg>>;

export default ChartBarSquareThin;
export { ChartBarSquareThin };
