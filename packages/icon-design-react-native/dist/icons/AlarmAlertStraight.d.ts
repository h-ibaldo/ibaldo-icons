import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmAlertStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmAlertStraight: ForwardRefExoticComponent<AlarmAlertStraightProps & RefAttributes<Svg>>;

export default AlarmAlertStraight;
export { AlarmAlertStraight };
