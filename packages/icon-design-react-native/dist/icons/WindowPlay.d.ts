import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlay: ForwardRefExoticComponent<WindowPlayProps & RefAttributes<Svg>>;

export default WindowPlay;
export { WindowPlay };
