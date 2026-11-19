import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXInterlocked: ForwardRefExoticComponent<LinkXInterlockedProps & RefAttributes<Svg>>;

export default LinkXInterlocked;
export { LinkXInterlocked };
