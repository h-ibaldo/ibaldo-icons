import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsInterlocked: ForwardRefExoticComponent<LinkDotsInterlockedProps & RefAttributes<Svg>>;

export default LinkDotsInterlocked;
export { LinkDotsInterlocked };
