import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeyHorizontalBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeyHorizontalBare: ForwardRefExoticComponent<WindowKeyHorizontalBareProps & RefAttributes<Svg>>;

export default WindowKeyHorizontalBare;
export { WindowKeyHorizontalBare };
