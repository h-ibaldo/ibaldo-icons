import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowShieldPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowShieldPlain: ForwardRefExoticComponent<WindowShieldPlainProps & RefAttributes<Svg>>;

export default WindowShieldPlain;
export { WindowShieldPlain };
