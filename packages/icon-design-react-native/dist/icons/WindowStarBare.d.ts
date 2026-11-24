import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStarBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStarBare: ForwardRefExoticComponent<WindowStarBareProps & RefAttributes<Svg>>;

export default WindowStarBare;
export { WindowStarBare };
