import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowRightBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowRightBracket: ForwardRefExoticComponent<LinkCircleArrowRightBracketProps & RefAttributes<Svg>>;

export default LinkCircleArrowRightBracket;
export { LinkCircleArrowRightBracket };
