import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmPlusStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmPlusStraight: ForwardRefExoticComponent<AlarmPlusStraightProps & RefAttributes<Svg>>;

export default AlarmPlusStraight;
export { AlarmPlusStraight };
