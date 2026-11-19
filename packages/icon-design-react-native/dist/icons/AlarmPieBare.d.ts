import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmPieBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmPieBare: ForwardRefExoticComponent<AlarmPieBareProps & RefAttributes<Svg>>;

export default AlarmPieBare;
export { AlarmPieBare };
