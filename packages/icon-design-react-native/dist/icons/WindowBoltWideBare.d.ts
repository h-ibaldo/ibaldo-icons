import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBoltWideBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBoltWideBare: ForwardRefExoticComponent<WindowBoltWideBareProps & RefAttributes<Svg>>;

export default WindowBoltWideBare;
export { WindowBoltWideBare };
