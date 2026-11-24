import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuBar: ForwardRefExoticComponent<LinkMenuBarProps & RefAttributes<Svg>>;

export default LinkMenuBar;
export { LinkMenuBar };
