import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowShieldBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowShieldBare: ForwardRefExoticComponent<WindowShieldBareProps & RefAttributes<Svg>>;

export default WindowShieldBare;
export { WindowShieldBare };
