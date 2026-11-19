import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMinus: ForwardRefExoticComponent<WindowMinusProps & RefAttributes<Svg>>;

export default WindowMinus;
export { WindowMinus };
