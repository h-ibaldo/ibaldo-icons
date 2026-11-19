import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStarCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStarCenterBare: ForwardRefExoticComponent<WindowStarCenterBareProps & RefAttributes<Svg>>;

export default WindowStarCenterBare;
export { WindowStarCenterBare };
