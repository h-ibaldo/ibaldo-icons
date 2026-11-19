import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStackDotted: ForwardRefExoticComponent<WindowStackDottedProps & RefAttributes<Svg>>;

export default WindowStackDotted;
export { WindowStackDotted };
