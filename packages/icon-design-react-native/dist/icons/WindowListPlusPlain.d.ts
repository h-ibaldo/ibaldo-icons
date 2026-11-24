import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListPlusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListPlusPlain: ForwardRefExoticComponent<WindowListPlusPlainProps & RefAttributes<Svg>>;

export default WindowListPlusPlain;
export { WindowListPlusPlain };
