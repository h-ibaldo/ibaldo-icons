import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXSlim: ForwardRefExoticComponent<LinkXSlimProps & RefAttributes<Svg>>;

export default LinkXSlim;
export { LinkXSlim };
