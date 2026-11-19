import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListCheckPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListCheckPlain: ForwardRefExoticComponent<WindowListCheckPlainProps & RefAttributes<Svg>>;

export default WindowListCheckPlain;
export { WindowListCheckPlain };
