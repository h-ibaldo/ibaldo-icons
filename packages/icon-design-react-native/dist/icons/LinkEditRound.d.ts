import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditRound: ForwardRefExoticComponent<LinkEditRoundProps & RefAttributes<Svg>>;

export default LinkEditRound;
export { LinkEditRound };
