import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpBar: ForwardRefExoticComponent<LinkArrowUpBarProps & RefAttributes<Svg>>;

export default LinkArrowUpBar;
export { LinkArrowUpBar };
