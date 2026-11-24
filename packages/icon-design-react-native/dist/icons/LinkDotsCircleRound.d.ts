import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleRound: ForwardRefExoticComponent<LinkDotsCircleRoundProps & RefAttributes<Svg>>;

export default LinkDotsCircleRound;
export { LinkDotsCircleRound };
