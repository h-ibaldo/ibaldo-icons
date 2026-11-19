import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleCheckBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleCheckBracket: ForwardRefExoticComponent<LinkCircleCheckBracketProps & RefAttributes<Svg>>;

export default LinkCircleCheckBracket;
export { LinkCircleCheckBracket };
