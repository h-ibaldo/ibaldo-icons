import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowLeftBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowLeftBracket: ForwardRefExoticComponent<LinkCircleArrowLeftBracketProps & RefAttributes<Svg>>;

export default LinkCircleArrowLeftBracket;
export { LinkCircleArrowLeftBracket };
