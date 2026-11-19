import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXCircleRound: ForwardRefExoticComponent<LinkXCircleRoundProps & RefAttributes<Svg>>;

export default LinkXCircleRound;
export { LinkXCircleRound };
