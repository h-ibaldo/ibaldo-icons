import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmMinusStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmMinusStraight: ForwardRefExoticComponent<AlarmMinusStraightProps & RefAttributes<Svg>>;

export default AlarmMinusStraight;
export { AlarmMinusStraight };
