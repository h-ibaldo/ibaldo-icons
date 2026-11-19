import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowHeartCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowHeartCenter: ForwardRefExoticComponent<WindowHeartCenterProps & RefAttributes<Svg>>;

export default WindowHeartCenter;
export { WindowHeartCenter };
