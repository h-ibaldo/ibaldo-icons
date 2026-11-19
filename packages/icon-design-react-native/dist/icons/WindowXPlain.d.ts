import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowXPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowXPlain: ForwardRefExoticComponent<WindowXPlainProps & RefAttributes<Svg>>;

export default WindowXPlain;
export { WindowXPlain };
