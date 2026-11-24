import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowWrenchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowWrench: ForwardRefExoticComponent<WindowWrenchProps & RefAttributes<Svg>>;

export default WindowWrench;
export { WindowWrench };
