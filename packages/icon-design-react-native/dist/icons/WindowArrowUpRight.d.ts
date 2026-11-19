import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowUpRight: ForwardRefExoticComponent<WindowArrowUpRightProps & RefAttributes<Svg>>;

export default WindowArrowUpRight;
export { WindowArrowUpRight };
