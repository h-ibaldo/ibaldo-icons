import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSlim: ForwardRefExoticComponent<LinkSlimProps & RefAttributes<Svg>>;

export default LinkSlim;
export { LinkSlim };
