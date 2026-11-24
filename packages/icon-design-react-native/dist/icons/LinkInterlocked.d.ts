import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkInterlockedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkInterlocked: ForwardRefExoticComponent<LinkInterlockedProps & RefAttributes<Svg>>;

export default LinkInterlocked;
export { LinkInterlocked };
