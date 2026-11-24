import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCompact: ForwardRefExoticComponent<LinkCompactProps & RefAttributes<Svg>>;

export default LinkCompact;
export { LinkCompact };
