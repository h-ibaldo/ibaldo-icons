import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXCircleBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXCircleBracket: ForwardRefExoticComponent<LinkXCircleBracketProps & RefAttributes<Svg>>;

export default LinkXCircleBracket;
export { LinkXCircleBracket };
