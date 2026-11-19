import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBarSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBarSmall: ForwardRefExoticComponent<LinkEditBarSmallProps & RefAttributes<Svg>>;

export default LinkEditBarSmall;
export { LinkEditBarSmall };
