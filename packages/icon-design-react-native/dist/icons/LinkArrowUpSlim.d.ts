import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpSlim: ForwardRefExoticComponent<LinkArrowUpSlimProps & RefAttributes<Svg>>;

export default LinkArrowUpSlim;
export { LinkArrowUpSlim };
