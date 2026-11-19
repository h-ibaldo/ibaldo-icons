import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBare: ForwardRefExoticComponent<AlarmBareProps & RefAttributes<Svg>>;

export default AlarmBare;
export { AlarmBare };
