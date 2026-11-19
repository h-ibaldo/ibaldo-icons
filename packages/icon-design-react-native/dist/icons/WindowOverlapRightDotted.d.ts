import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapRightDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapRightDotted: ForwardRefExoticComponent<WindowOverlapRightDottedProps & RefAttributes<Svg>>;

export default WindowOverlapRightDotted;
export { WindowOverlapRightDotted };
