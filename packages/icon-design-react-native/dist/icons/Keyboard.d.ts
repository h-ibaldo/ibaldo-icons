import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyboardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Keyboard: ForwardRefExoticComponent<KeyboardProps & RefAttributes<Svg>>;

export default Keyboard;
export { Keyboard };
