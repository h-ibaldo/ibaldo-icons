import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowTwoDotsRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowTwoDotsRight: ForwardRefExoticComponent<WindowTwoDotsRightProps & RefAttributes<Svg>>;

export default WindowTwoDotsRight;
export { WindowTwoDotsRight };
