import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXBracket: ForwardRefExoticComponent<LinkXBracketProps & RefAttributes<Svg>>;

export default LinkXBracket;
export { LinkXBracket };
