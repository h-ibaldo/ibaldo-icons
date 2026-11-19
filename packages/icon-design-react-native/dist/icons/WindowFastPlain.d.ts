import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowFastPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowFastPlain: ForwardRefExoticComponent<WindowFastPlainProps & RefAttributes<Svg>>;

export default WindowFastPlain;
export { WindowFastPlain };
