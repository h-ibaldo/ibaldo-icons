import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmCheckArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmCheckArc: ForwardRefExoticComponent<AlarmCheckArcProps & RefAttributes<Svg>>;

export default AlarmCheckArc;
export { AlarmCheckArc };
