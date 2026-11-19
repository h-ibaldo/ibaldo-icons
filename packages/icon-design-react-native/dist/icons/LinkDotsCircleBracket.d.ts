import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCircleBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleBracket: ForwardRefExoticComponent<LinkDotsCircleBracketProps & RefAttributes<Svg>>;

export default LinkDotsCircleBracket;
export { LinkDotsCircleBracket };
