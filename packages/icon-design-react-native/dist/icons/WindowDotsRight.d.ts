import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDotsRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDotsRight: ForwardRefExoticComponent<WindowDotsRightProps & RefAttributes<Svg>>;

export default WindowDotsRight;
export { WindowDotsRight };
