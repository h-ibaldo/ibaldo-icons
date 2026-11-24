import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmSnoozeStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmSnoozeStraight: ForwardRefExoticComponent<AlarmSnoozeStraightProps & RefAttributes<Svg>>;

export default AlarmSnoozeStraight;
export { AlarmSnoozeStraight };
