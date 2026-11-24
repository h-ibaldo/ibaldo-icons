import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCompact: ForwardRefExoticComponent<LinkDotsCompactProps & RefAttributes<Svg>>;

export default LinkDotsCompact;
export { LinkDotsCompact };
