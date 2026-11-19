import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBoltBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBoltBare: ForwardRefExoticComponent<WindowBoltBareProps & RefAttributes<Svg>>;

export default WindowBoltBare;
export { WindowBoltBare };
