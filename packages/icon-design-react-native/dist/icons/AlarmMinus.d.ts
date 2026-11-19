import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmMinus: ForwardRefExoticComponent<AlarmMinusProps & RefAttributes<Svg>>;

export default AlarmMinus;
export { AlarmMinus };
