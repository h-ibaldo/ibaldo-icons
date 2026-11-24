import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDotsVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDotsVertical: ForwardRefExoticComponent<WindowDotsVerticalProps & RefAttributes<Svg>>;

export default WindowDotsVertical;
export { WindowDotsVertical };
