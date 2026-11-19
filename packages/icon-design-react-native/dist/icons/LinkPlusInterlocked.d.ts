import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusInterlocked: ForwardRefExoticComponent<LinkPlusInterlockedProps & RefAttributes<Svg>>;

export default LinkPlusInterlocked;
export { LinkPlusInterlocked };
