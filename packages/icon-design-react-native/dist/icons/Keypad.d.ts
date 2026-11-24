import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeypadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Keypad: ForwardRefExoticComponent<KeypadProps & RefAttributes<Svg>>;

export default Keypad;
export { Keypad };
