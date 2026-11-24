import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCodePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCodePlain: ForwardRefExoticComponent<WindowCodePlainProps & RefAttributes<Svg>>;

export default WindowCodePlain;
export { WindowCodePlain };
