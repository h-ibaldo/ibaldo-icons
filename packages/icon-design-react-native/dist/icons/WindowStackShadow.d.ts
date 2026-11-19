import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackShadowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStackShadow: ForwardRefExoticComponent<WindowStackShadowProps & RefAttributes<Svg>>;

export default WindowStackShadow;
export { WindowStackShadow };
