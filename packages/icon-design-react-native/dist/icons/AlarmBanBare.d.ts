import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBanBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBanBare: ForwardRefExoticComponent<AlarmBanBareProps & RefAttributes<Svg>>;

export default AlarmBanBare;
export { AlarmBanBare };
