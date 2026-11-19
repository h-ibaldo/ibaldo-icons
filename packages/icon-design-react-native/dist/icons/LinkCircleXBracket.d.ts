import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleXBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleXBracket: ForwardRefExoticComponent<LinkCircleXBracketProps & RefAttributes<Svg>>;

export default LinkCircleXBracket;
export { LinkCircleXBracket };
