import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowToggleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowToggle: ForwardRefExoticComponent<WindowToggleProps & RefAttributes<Svg>>;

export default WindowToggle;
export { WindowToggle };
