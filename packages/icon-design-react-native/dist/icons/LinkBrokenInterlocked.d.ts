import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenInterlocked: ForwardRefExoticComponent<LinkBrokenInterlockedProps & RefAttributes<Svg>>;

export default LinkBrokenInterlocked;
export { LinkBrokenInterlocked };
