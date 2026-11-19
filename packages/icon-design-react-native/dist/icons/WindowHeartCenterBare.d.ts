import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowHeartCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowHeartCenterBare: ForwardRefExoticComponent<WindowHeartCenterBareProps & RefAttributes<Svg>>;

export default WindowHeartCenterBare;
export { WindowHeartCenterBare };
