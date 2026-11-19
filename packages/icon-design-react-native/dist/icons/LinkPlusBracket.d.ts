import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusBracket: ForwardRefExoticComponent<LinkPlusBracketProps & RefAttributes<Svg>>;

export default LinkPlusBracket;
export { LinkPlusBracket };
