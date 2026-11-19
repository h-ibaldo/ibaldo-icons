import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSearchBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSearchBare: ForwardRefExoticComponent<WindowSearchBareProps & RefAttributes<Svg>>;

export default WindowSearchBare;
export { WindowSearchBare };
