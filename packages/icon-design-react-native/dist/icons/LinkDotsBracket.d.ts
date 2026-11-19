import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsBracket: ForwardRefExoticComponent<LinkDotsBracketProps & RefAttributes<Svg>>;

export default LinkDotsBracket;
export { LinkDotsBracket };
