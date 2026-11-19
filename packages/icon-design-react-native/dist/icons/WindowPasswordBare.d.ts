import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPasswordBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPasswordBare: ForwardRefExoticComponent<WindowPasswordBareProps & RefAttributes<Svg>>;

export default WindowPasswordBare;
export { WindowPasswordBare };
