import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckInterlocked: ForwardRefExoticComponent<LinkCheckInterlockedProps & RefAttributes<Svg>>;

export default LinkCheckInterlocked;
export { LinkCheckInterlocked };
