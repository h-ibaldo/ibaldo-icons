import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowUpRightPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowUpRightPlain: ForwardRefExoticComponent<WindowArrowUpRightPlainProps & RefAttributes<Svg>>;

export default WindowArrowUpRightPlain;
export { WindowArrowUpRightPlain };
