import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDotsCircle: ForwardRefExoticComponent<WindowDotsCircleProps & RefAttributes<Svg>>;

export default WindowDotsCircle;
export { WindowDotsCircle };
