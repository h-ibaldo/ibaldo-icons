import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckBracket: ForwardRefExoticComponent<LinkCheckBracketProps & RefAttributes<Svg>>;

export default LinkCheckBracket;
export { LinkCheckBracket };
