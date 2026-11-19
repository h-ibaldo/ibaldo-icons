import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBracket: ForwardRefExoticComponent<LinkBrokenBracketProps & RefAttributes<Svg>>;

export default LinkBrokenBracket;
export { LinkBrokenBracket };
