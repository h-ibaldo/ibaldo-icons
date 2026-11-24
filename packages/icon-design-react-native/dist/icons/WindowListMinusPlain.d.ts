import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListMinusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListMinusPlain: ForwardRefExoticComponent<WindowListMinusPlainProps & RefAttributes<Svg>>;

export default WindowListMinusPlain;
export { WindowListMinusPlain };
