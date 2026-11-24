import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListPlain: ForwardRefExoticComponent<WindowListPlainProps & RefAttributes<Svg>>;

export default WindowListPlain;
export { WindowListPlain };
