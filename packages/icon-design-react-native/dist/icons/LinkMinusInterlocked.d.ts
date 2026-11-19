import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusInterlocked: ForwardRefExoticComponent<LinkMinusInterlockedProps & RefAttributes<Svg>>;

export default LinkMinusInterlocked;
export { LinkMinusInterlocked };
