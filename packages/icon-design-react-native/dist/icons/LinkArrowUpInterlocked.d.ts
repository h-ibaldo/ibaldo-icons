import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpInterlocked: ForwardRefExoticComponent<LinkArrowUpInterlockedProps & RefAttributes<Svg>>;

export default LinkArrowUpInterlocked;
export { LinkArrowUpInterlocked };
