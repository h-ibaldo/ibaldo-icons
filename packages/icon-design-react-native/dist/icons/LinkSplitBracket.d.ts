import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSplitBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSplitBracket: ForwardRefExoticComponent<LinkSplitBracketProps & RefAttributes<Svg>>;

export default LinkSplitBracket;
export { LinkSplitBracket };
