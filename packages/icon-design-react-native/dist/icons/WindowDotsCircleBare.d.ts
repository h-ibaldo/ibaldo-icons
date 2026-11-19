import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDotsCircleBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDotsCircleBare: ForwardRefExoticComponent<WindowDotsCircleBareProps & RefAttributes<Svg>>;

export default WindowDotsCircleBare;
export { WindowDotsCircleBare };
