import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCircleBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleBracket: ForwardRefExoticComponent<LinkCheckCircleBracketProps & RefAttributes<Svg>>;

export default LinkCheckCircleBracket;
export { LinkCheckCircleBracket };
