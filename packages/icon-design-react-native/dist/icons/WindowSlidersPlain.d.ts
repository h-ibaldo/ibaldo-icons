import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSlidersPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSlidersPlain: ForwardRefExoticComponent<WindowSlidersPlainProps & RefAttributes<Svg>>;

export default WindowSlidersPlain;
export { WindowSlidersPlain };
