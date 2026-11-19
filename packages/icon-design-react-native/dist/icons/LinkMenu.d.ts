import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenu: ForwardRefExoticComponent<LinkMenuProps & RefAttributes<Svg>>;

export default LinkMenu;
export { LinkMenu };
