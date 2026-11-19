import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmMinusArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmMinusArc: ForwardRefExoticComponent<AlarmMinusArcProps & RefAttributes<Svg>>;

export default AlarmMinusArc;
export { AlarmMinusArc };
