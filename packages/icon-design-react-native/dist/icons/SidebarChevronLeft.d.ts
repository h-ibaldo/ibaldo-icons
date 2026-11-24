import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarChevronLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarChevronLeft: ForwardRefExoticComponent<SidebarChevronLeftProps & RefAttributes<Svg>>;

export default SidebarChevronLeft;
export { SidebarChevronLeft };
