import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmCheck: ForwardRefExoticComponent<AlarmCheckProps & RefAttributes<Svg>>;

export default AlarmCheck;
export { AlarmCheck };
