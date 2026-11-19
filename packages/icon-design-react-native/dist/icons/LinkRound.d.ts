import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkRound: ForwardRefExoticComponent<LinkRoundProps & RefAttributes<Svg>>;

export default LinkRound;
export { LinkRound };
