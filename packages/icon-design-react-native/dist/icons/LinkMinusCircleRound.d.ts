import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusCircleRound: ForwardRefExoticComponent<LinkMinusCircleRoundProps & RefAttributes<Svg>>;

export default LinkMinusCircleRound;
export { LinkMinusCircleRound };
