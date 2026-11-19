import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSealProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSeal: ForwardRefExoticComponent<WindowSealProps & RefAttributes<Svg>>;

export default WindowSeal;
export { WindowSeal };
