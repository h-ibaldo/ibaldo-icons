import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserSidebarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserSidebar: ForwardRefExoticComponent<BrowserSidebarProps & RefAttributes<Svg>>;

export default BrowserSidebar;
export { BrowserSidebar };
