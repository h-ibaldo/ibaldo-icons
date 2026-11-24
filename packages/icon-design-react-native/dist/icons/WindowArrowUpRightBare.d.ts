import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowUpRightBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowUpRightBare: ForwardRefExoticComponent<WindowArrowUpRightBareProps & RefAttributes<Svg>>;

export default WindowArrowUpRightBare;
export { WindowArrowUpRightBare };
