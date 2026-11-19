import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStackStriped: ForwardRefExoticComponent<WindowStackStripedProps & RefAttributes<Svg>>;

export default WindowStackStriped;
export { WindowStackStriped };
