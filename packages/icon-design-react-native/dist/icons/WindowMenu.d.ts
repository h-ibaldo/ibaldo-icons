import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMenuProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMenu: ForwardRefExoticComponent<WindowMenuProps & RefAttributes<Svg>>;

export default WindowMenu;
export { WindowMenu };
