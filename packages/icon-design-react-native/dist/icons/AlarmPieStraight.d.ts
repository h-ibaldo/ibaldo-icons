import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmPieStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmPieStraight: ForwardRefExoticComponent<AlarmPieStraightProps & RefAttributes<Svg>>;

export default AlarmPieStraight;
export { AlarmPieStraight };
