import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSyncLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSyncLarge: ForwardRefExoticComponent<WindowSyncLargeProps & RefAttributes<Svg>>;

export default WindowSyncLarge;
export { WindowSyncLarge };
