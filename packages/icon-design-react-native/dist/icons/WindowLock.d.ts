import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLock: ForwardRefExoticComponent<WindowLockProps & RefAttributes<Svg>>;

export default WindowLock;
export { WindowLock };
