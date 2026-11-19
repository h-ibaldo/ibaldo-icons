import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBoltCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBoltCenter: ForwardRefExoticComponent<WindowBoltCenterProps & RefAttributes<Svg>>;

export default WindowBoltCenter;
export { WindowBoltCenter };
