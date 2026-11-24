import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstCompact: ForwardRefExoticComponent<LinkBrokenBurstCompactProps & RefAttributes<Svg>>;

export default LinkBrokenBurstCompact;
export { LinkBrokenBurstCompact };
