import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCheck: ForwardRefExoticComponent<WindowCheckProps & RefAttributes<Svg>>;

export default WindowCheck;
export { WindowCheck };
