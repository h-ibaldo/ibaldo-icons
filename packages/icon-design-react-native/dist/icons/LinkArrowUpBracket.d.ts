import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpBracket: ForwardRefExoticComponent<LinkArrowUpBracketProps & RefAttributes<Svg>>;

export default LinkArrowUpBracket;
export { LinkArrowUpBracket };
