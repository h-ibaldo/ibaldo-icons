import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSealBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSealBare: ForwardRefExoticComponent<WindowSealBareProps & RefAttributes<Svg>>;

export default WindowSealBare;
export { WindowSealBare };
