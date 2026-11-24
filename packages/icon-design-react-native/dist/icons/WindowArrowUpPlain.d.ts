import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowUpPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowUpPlain: ForwardRefExoticComponent<WindowArrowUpPlainProps & RefAttributes<Svg>>;

export default WindowArrowUpPlain;
export { WindowArrowUpPlain };
