import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StopwatchNeedleArcLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StopwatchNeedleArcLeft: ForwardRefExoticComponent<StopwatchNeedleArcLeftProps & RefAttributes<Svg>>;

export default StopwatchNeedleArcLeft;
export { StopwatchNeedleArcLeft };
