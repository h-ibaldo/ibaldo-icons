import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenDockDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenDockDots: ForwardRefExoticComponent<ScreenDockDotsProps & RefAttributes<Svg>>;

export default ScreenDockDots;
export { ScreenDockDots };
