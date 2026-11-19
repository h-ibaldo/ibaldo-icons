import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuSlim: ForwardRefExoticComponent<LinkMenuSlimProps & RefAttributes<Svg>>;

export default LinkMenuSlim;
export { LinkMenuSlim };
