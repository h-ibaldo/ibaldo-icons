import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowModalBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowModalBare: ForwardRefExoticComponent<WindowModalBareProps & RefAttributes<Svg>>;

export default WindowModalBare;
export { WindowModalBare };
