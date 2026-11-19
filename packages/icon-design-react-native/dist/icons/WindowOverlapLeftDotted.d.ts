import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapLeftDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapLeftDotted: ForwardRefExoticComponent<WindowOverlapLeftDottedProps & RefAttributes<Svg>>;

export default WindowOverlapLeftDotted;
export { WindowOverlapLeftDotted };
