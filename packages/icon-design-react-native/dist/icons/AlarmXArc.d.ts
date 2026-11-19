import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmXArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmXArc: ForwardRefExoticComponent<AlarmXArcProps & RefAttributes<Svg>>;

export default AlarmXArc;
export { AlarmXArc };
