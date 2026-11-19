import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowEditPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowEditPlain: ForwardRefExoticComponent<WindowEditPlainProps & RefAttributes<Svg>>;

export default WindowEditPlain;
export { WindowEditPlain };
