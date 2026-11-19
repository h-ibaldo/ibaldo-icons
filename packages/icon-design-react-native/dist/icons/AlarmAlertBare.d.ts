import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmAlertBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmAlertBare: ForwardRefExoticComponent<AlarmAlertBareProps & RefAttributes<Svg>>;

export default AlarmAlertBare;
export { AlarmAlertBare };
