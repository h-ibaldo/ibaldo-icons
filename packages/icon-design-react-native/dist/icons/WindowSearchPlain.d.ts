import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSearchPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSearchPlain: ForwardRefExoticComponent<WindowSearchPlainProps & RefAttributes<Svg>>;

export default WindowSearchPlain;
export { WindowSearchPlain };
