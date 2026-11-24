import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCheckCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCheckCirclePlain: ForwardRefExoticComponent<WindowCheckCirclePlainProps & RefAttributes<Svg>>;

export default WindowCheckCirclePlain;
export { WindowCheckCirclePlain };
