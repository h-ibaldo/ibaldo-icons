import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCirclePlusThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCirclePlusThin: ForwardRefExoticComponent<ChartBarCirclePlusThinProps & RefAttributes<Svg>>;

export default ChartBarCirclePlusThin;
export { ChartBarCirclePlusThin };
