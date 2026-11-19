import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStarCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStarCenter: ForwardRefExoticComponent<WindowStarCenterProps & RefAttributes<Svg>>;

export default WindowStarCenter;
export { WindowStarCenter };
