import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCloud2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCloud2: ForwardRefExoticComponent<WindowCloud2Props & RefAttributes<Svg>>;

export default WindowCloud2;
export { WindowCloud2 };
