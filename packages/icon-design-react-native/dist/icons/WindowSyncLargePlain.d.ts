import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSyncLargePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSyncLargePlain: ForwardRefExoticComponent<WindowSyncLargePlainProps & RefAttributes<Svg>>;

export default WindowSyncLargePlain;
export { WindowSyncLargePlain };
