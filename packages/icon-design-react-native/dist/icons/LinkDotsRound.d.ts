import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsRound: ForwardRefExoticComponent<LinkDotsRoundProps & RefAttributes<Svg>>;

export default LinkDotsRound;
export { LinkDotsRound };
