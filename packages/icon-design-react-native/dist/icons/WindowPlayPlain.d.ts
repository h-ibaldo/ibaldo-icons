import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlayPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlayPlain: ForwardRefExoticComponent<WindowPlayPlainProps & RefAttributes<Svg>>;

export default WindowPlayPlain;
export { WindowPlayPlain };
