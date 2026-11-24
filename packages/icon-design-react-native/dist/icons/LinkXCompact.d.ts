import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXCompact: ForwardRefExoticComponent<LinkXCompactProps & RefAttributes<Svg>>;

export default LinkXCompact;
export { LinkXCompact };
