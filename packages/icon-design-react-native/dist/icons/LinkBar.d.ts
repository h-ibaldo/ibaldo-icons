import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBar: ForwardRefExoticComponent<LinkBarProps & RefAttributes<Svg>>;

export default LinkBar;
export { LinkBar };
