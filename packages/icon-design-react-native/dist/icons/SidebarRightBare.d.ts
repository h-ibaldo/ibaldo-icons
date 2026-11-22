import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SidebarRightBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SidebarRightBare: ForwardRefExoticComponent<SidebarRightBareProps & RefAttributes<Svg>>;

export default SidebarRightBare;
export { SidebarRightBare };
