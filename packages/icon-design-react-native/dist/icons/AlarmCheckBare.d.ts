import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmCheckBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmCheckBare: ForwardRefExoticComponent<AlarmCheckBareProps & RefAttributes<Svg>>;

export default AlarmCheckBare;
export { AlarmCheckBare };
