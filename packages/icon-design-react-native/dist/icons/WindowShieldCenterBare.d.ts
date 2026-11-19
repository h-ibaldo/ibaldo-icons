import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowShieldCenterBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowShieldCenterBare: ForwardRefExoticComponent<WindowShieldCenterBareProps & RefAttributes<Svg>>;

export default WindowShieldCenterBare;
export { WindowShieldCenterBare };
