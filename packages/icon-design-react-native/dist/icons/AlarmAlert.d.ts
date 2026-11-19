import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmAlert: ForwardRefExoticComponent<AlarmAlertProps & RefAttributes<Svg>>;

export default AlarmAlert;
export { AlarmAlert };
