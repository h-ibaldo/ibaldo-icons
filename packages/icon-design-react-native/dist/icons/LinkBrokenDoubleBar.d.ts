import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenDoubleBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenDoubleBar: ForwardRefExoticComponent<LinkBrokenDoubleBarProps & RefAttributes<Svg>>;

export default LinkBrokenDoubleBar;
export { LinkBrokenDoubleBar };
