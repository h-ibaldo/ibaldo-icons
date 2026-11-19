import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCompact: ForwardRefExoticComponent<LinkCheckCompactProps & RefAttributes<Svg>>;

export default LinkCheckCompact;
export { LinkCheckCompact };
