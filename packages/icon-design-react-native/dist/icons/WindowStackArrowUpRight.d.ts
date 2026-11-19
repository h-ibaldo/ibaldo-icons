import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStackArrowUpRight: ForwardRefExoticComponent<WindowStackArrowUpRightProps & RefAttributes<Svg>>;

export default WindowStackArrowUpRight;
export { WindowStackArrowUpRight };
