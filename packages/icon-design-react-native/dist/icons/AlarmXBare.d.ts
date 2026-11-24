import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmXBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmXBare: ForwardRefExoticComponent<AlarmXBareProps & RefAttributes<Svg>>;

export default AlarmXBare;
export { AlarmXBare };
