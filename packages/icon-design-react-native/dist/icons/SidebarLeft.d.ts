import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarLeft: ForwardRefExoticComponent<SidebarLeftProps & RefAttributes<Svg>>;

export default SidebarLeft;
export { SidebarLeft };
