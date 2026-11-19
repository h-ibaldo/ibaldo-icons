import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowHeartBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowHeartBare: ForwardRefExoticComponent<WindowHeartBareProps & RefAttributes<Svg>>;

export default WindowHeartBare;
export { WindowHeartBare };
