import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarJoinedBaseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarJoinedBase: ForwardRefExoticComponent<ChartBarJoinedBaseProps & RefAttributes<Svg>>;

export default ChartBarJoinedBase;
export { ChartBarJoinedBase };
