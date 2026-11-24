import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMenuPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMenuPlain: ForwardRefExoticComponent<WindowMenuPlainProps & RefAttributes<Svg>>;

export default WindowMenuPlain;
export { WindowMenuPlain };
