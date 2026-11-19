import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowGlobePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowGlobePlain: ForwardRefExoticComponent<WindowGlobePlainProps & RefAttributes<Svg>>;

export default WindowGlobePlain;
export { WindowGlobePlain };
