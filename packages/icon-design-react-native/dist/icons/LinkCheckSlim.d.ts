import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckSlim: ForwardRefExoticComponent<LinkCheckSlimProps & RefAttributes<Svg>>;

export default LinkCheckSlim;
export { LinkCheckSlim };
