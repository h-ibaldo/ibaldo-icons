import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleBracket: ForwardRefExoticComponent<LinkCircleBracketProps & RefAttributes<Svg>>;

export default LinkCircleBracket;
export { LinkCircleBracket };
