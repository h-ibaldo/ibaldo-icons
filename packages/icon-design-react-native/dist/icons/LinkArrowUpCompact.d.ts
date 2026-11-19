import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpCompact: ForwardRefExoticComponent<LinkArrowUpCompactProps & RefAttributes<Svg>>;

export default LinkArrowUpCompact;
export { LinkArrowUpCompact };
