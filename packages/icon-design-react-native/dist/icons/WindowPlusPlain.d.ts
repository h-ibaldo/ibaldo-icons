import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlusPlain: ForwardRefExoticComponent<WindowPlusPlainProps & RefAttributes<Svg>>;

export default WindowPlusPlain;
export { WindowPlusPlain };
