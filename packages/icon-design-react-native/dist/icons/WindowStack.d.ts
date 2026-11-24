import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStack: ForwardRefExoticComponent<WindowStackProps & RefAttributes<Svg>>;

export default WindowStack;
export { WindowStack };
