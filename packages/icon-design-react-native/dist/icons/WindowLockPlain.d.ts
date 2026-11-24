import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLockPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLockPlain: ForwardRefExoticComponent<WindowLockPlainProps & RefAttributes<Svg>>;

export default WindowLockPlain;
export { WindowLockPlain };
