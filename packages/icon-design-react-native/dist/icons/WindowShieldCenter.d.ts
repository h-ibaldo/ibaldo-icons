import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowShieldCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowShieldCenter: ForwardRefExoticComponent<WindowShieldCenterProps & RefAttributes<Svg>>;

export default WindowShieldCenter;
export { WindowShieldCenter };
