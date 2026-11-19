import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkImageBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkImageBracket: ForwardRefExoticComponent<LinkImageBracketProps & RefAttributes<Svg>>;

export default LinkImageBracket;
export { LinkImageBracket };
