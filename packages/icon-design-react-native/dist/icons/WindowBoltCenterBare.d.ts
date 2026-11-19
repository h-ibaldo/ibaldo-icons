import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBoltCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBoltCenterBare: ForwardRefExoticComponent<WindowBoltCenterBareProps & RefAttributes<Svg>>;

export default WindowBoltCenterBare;
export { WindowBoltCenterBare };
