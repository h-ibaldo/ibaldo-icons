import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusCompact: ForwardRefExoticComponent<LinkMinusCompactProps & RefAttributes<Svg>>;

export default LinkMinusCompact;
export { LinkMinusCompact };
