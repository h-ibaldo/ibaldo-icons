import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmArc: ForwardRefExoticComponent<AlarmArcProps & RefAttributes<Svg>>;

export default AlarmArc;
export { AlarmArc };
