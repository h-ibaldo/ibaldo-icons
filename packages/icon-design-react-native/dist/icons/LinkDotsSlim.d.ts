import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsSlim: ForwardRefExoticComponent<LinkDotsSlimProps & RefAttributes<Svg>>;

export default LinkDotsSlim;
export { LinkDotsSlim };
