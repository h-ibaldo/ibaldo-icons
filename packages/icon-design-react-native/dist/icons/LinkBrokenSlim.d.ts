import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenSlim: ForwardRefExoticComponent<LinkBrokenSlimProps & RefAttributes<Svg>>;

export default LinkBrokenSlim;
export { LinkBrokenSlim };
