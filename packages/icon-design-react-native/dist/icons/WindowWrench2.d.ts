import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowWrench2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowWrench2: ForwardRefExoticComponent<WindowWrench2Props & RefAttributes<Svg>>;

export default WindowWrench2;
export { WindowWrench2 };
