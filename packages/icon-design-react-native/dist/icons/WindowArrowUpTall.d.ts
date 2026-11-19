import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowUpTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowUpTall: ForwardRefExoticComponent<WindowArrowUpTallProps & RefAttributes<Svg>>;

export default WindowArrowUpTall;
export { WindowArrowUpTall };
