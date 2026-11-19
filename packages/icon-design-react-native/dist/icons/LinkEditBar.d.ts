import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBar: ForwardRefExoticComponent<LinkEditBarProps & RefAttributes<Svg>>;

export default LinkEditBar;
export { LinkEditBar };
