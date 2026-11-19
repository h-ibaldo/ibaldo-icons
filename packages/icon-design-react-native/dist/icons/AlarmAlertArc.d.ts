import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmAlertArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmAlertArc: ForwardRefExoticComponent<AlarmAlertArcProps & RefAttributes<Svg>>;

export default AlarmAlertArc;
export { AlarmAlertArc };
