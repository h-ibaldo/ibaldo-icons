import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowRosetteBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowRosetteBare: ForwardRefExoticComponent<WindowRosetteBareProps & RefAttributes<Svg>>;

export default WindowRosetteBare;
export { WindowRosetteBare };
