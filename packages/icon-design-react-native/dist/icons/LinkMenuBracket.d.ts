import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuBracket: ForwardRefExoticComponent<LinkMenuBracketProps & RefAttributes<Svg>>;

export default LinkMenuBracket;
export { LinkMenuBracket };
