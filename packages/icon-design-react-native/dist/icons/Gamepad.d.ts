import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GamepadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Gamepad: ForwardRefExoticComponent<GamepadProps & RefAttributes<Svg>>;

export default Gamepad;
export { Gamepad };
