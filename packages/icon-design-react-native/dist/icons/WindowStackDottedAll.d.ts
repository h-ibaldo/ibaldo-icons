import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackDottedAllProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStackDottedAll: ForwardRefExoticComponent<WindowStackDottedAllProps & RefAttributes<Svg>>;

export default WindowStackDottedAll;
export { WindowStackDottedAll };
