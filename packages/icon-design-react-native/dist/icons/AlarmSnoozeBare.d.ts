import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmSnoozeBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmSnoozeBare: ForwardRefExoticComponent<AlarmSnoozeBareProps & RefAttributes<Svg>>;

export default AlarmSnoozeBare;
export { AlarmSnoozeBare };
