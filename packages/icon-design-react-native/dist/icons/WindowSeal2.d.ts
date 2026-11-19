import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSeal2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSeal2: ForwardRefExoticComponent<WindowSeal2Props & RefAttributes<Svg>>;

export default WindowSeal2;
export { WindowSeal2 };
