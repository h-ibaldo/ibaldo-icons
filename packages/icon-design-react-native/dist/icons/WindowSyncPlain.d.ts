import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSyncPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSyncPlain: ForwardRefExoticComponent<WindowSyncPlainProps & RefAttributes<Svg>>;

export default WindowSyncPlain;
export { WindowSyncPlain };
