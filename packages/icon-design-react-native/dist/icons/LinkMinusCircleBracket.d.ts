import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusCircleBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusCircleBracket: ForwardRefExoticComponent<LinkMinusCircleBracketProps & RefAttributes<Svg>>;

export default LinkMinusCircleBracket;
export { LinkMinusCircleBracket };
