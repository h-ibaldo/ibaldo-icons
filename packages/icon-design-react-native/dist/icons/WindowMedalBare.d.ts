import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMedalBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMedalBare: ForwardRefExoticComponent<WindowMedalBareProps & RefAttributes<Svg>>;

export default WindowMedalBare;
export { WindowMedalBare };
