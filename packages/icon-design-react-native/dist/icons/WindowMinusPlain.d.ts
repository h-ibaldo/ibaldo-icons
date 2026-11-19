import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMinusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMinusPlain: ForwardRefExoticComponent<WindowMinusPlainProps & RefAttributes<Svg>>;

export default WindowMinusPlain;
export { WindowMinusPlain };
