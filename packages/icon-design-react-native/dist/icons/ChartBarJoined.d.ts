import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarJoined: ForwardRefExoticComponent<ChartBarJoinedProps & RefAttributes<Svg>>;

export default ChartBarJoined;
export { ChartBarJoined };
