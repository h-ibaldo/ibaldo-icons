import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarArrowLeft: ForwardRefExoticComponent<SidebarArrowLeftProps & RefAttributes<Svg>>;

export default SidebarArrowLeft;
export { SidebarArrowLeft };
