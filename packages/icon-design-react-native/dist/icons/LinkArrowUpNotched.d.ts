import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpNotched: ForwardRefExoticComponent<LinkArrowUpNotchedProps & RefAttributes<Svg>>;

export default LinkArrowUpNotched;
export { LinkArrowUpNotched };
