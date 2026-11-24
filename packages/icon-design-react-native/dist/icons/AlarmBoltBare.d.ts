import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBoltBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBoltBare: ForwardRefExoticComponent<AlarmBoltBareProps & RefAttributes<Svg>>;

export default AlarmBoltBare;
export { AlarmBoltBare };
