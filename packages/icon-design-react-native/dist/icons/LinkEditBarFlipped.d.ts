import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBarFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBarFlipped: ForwardRefExoticComponent<LinkEditBarFlippedProps & RefAttributes<Svg>>;

export default LinkEditBarFlipped;
export { LinkEditBarFlipped };
