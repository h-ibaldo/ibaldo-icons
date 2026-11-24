import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStar: ForwardRefExoticComponent<WindowStarProps & RefAttributes<Svg>>;

export default WindowStar;
export { WindowStar };
