import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowStackShadowBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowStackShadowBare: ForwardRefExoticComponent<WindowStackShadowBareProps & RefAttributes<Svg>>;

export default WindowStackShadowBare;
export { WindowStackShadowBare };
