import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmCheckStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmCheckStraight: ForwardRefExoticComponent<AlarmCheckStraightProps & RefAttributes<Svg>>;

export default AlarmCheckStraight;
export { AlarmCheckStraight };
