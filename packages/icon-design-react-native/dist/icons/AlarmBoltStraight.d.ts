import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBoltStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBoltStraight: ForwardRefExoticComponent<AlarmBoltStraightProps & RefAttributes<Svg>>;

export default AlarmBoltStraight;
export { AlarmBoltStraight };
