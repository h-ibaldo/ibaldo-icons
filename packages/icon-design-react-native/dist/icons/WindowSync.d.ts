import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSync: ForwardRefExoticComponent<WindowSyncProps & RefAttributes<Svg>>;

export default WindowSync;
export { WindowSync };
