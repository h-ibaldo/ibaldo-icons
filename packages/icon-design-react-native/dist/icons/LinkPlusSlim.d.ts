import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusSlim: ForwardRefExoticComponent<LinkPlusSlimProps & RefAttributes<Svg>>;

export default LinkPlusSlim;
export { LinkPlusSlim };
