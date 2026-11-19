import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCheckCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCheckCenter: ForwardRefExoticComponent<WindowCheckCenterProps & RefAttributes<Svg>>;

export default WindowCheckCenter;
export { WindowCheckCenter };
