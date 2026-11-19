import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquarePlusThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquarePlusThin: ForwardRefExoticComponent<ChartBarSquarePlusThinProps & RefAttributes<Svg>>;

export default ChartBarSquarePlusThin;
export { ChartBarSquarePlusThin };
