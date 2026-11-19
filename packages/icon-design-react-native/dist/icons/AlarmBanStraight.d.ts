import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBanStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBanStraight: ForwardRefExoticComponent<AlarmBanStraightProps & RefAttributes<Svg>>;

export default AlarmBanStraight;
export { AlarmBanStraight };
