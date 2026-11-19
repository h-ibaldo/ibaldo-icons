import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScreenDockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScreenDock: ForwardRefExoticComponent<ScreenDockProps & RefAttributes<Svg>>;

export default ScreenDock;
export { ScreenDock };
