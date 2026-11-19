import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowTwoDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowTwoDots: ForwardRefExoticComponent<WindowTwoDotsProps & RefAttributes<Svg>>;

export default WindowTwoDots;
export { WindowTwoDots };
