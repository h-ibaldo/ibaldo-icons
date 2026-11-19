import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCheckPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCheckPlain: ForwardRefExoticComponent<WindowCheckPlainProps & RefAttributes<Svg>>;

export default WindowCheckPlain;
export { WindowCheckPlain };
