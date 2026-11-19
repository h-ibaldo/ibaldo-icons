import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBan: ForwardRefExoticComponent<AlarmBanProps & RefAttributes<Svg>>;

export default AlarmBan;
export { AlarmBan };
