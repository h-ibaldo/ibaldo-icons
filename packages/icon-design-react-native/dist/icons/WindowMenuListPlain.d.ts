import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMenuListPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMenuListPlain: ForwardRefExoticComponent<WindowMenuListPlainProps & RefAttributes<Svg>>;

export default WindowMenuListPlain;
export { WindowMenuListPlain };
