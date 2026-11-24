import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenDoubleBracketLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenDoubleBracketLarge: ForwardRefExoticComponent<LinkBrokenDoubleBracketLargeProps & RefAttributes<Svg>>;

export default LinkBrokenDoubleBracketLarge;
export { LinkBrokenDoubleBracketLarge };
