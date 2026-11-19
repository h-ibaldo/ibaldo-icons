import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmStraight: ForwardRefExoticComponent<AlarmStraightProps & RefAttributes<Svg>>;

export default AlarmStraight;
export { AlarmStraight };
