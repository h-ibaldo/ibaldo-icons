import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface JoystickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Joystick: ForwardRefExoticComponent<JoystickProps & RefAttributes<Svg>>;

export default Joystick;
export { Joystick };
