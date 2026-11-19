import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowWrenchBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowWrenchBare: ForwardRefExoticComponent<WindowWrenchBareProps & RefAttributes<Svg>>;

export default WindowWrenchBare;
export { WindowWrenchBare };
