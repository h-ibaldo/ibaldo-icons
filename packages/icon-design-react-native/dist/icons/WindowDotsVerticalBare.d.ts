import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowDotsVerticalBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowDotsVerticalBare: ForwardRefExoticComponent<WindowDotsVerticalBareProps & RefAttributes<Svg>>;

export default WindowDotsVerticalBare;
export { WindowDotsVerticalBare };
