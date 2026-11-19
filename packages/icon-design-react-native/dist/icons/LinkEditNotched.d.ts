import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditNotched: ForwardRefExoticComponent<LinkEditNotchedProps & RefAttributes<Svg>>;

export default LinkEditNotched;
export { LinkEditNotched };
