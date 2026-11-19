import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchNeedleArcRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchNeedleArcRight: ForwardRefExoticComponent<StopwatchNeedleArcRightProps & RefAttributes<Svg>>;

export default StopwatchNeedleArcRight;
export { StopwatchNeedleArcRight };
