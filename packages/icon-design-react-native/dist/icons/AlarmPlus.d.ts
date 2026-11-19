import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmPlus: ForwardRefExoticComponent<AlarmPlusProps & RefAttributes<Svg>>;

export default AlarmPlus;
export { AlarmPlus };
