import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarLeftBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarLeftBare: ForwardRefExoticComponent<SidebarLeftBareProps & RefAttributes<Svg>>;

export default SidebarLeftBare;
export { SidebarLeftBare };
