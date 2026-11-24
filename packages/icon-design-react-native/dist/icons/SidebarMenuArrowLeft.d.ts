import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarMenuArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarMenuArrowLeft: ForwardRefExoticComponent<SidebarMenuArrowLeftProps & RefAttributes<Svg>>;

export default SidebarMenuArrowLeft;
export { SidebarMenuArrowLeft };
