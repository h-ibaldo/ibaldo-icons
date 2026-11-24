import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarCircleThinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleThin: ForwardRefExoticComponent<ChartBarCircleThinProps & RefAttributes<Svg>>;

export default ChartBarCircleThin;
export { ChartBarCircleThin };
