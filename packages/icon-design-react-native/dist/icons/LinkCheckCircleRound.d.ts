import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleRound: ForwardRefExoticComponent<LinkCheckCircleRoundProps & RefAttributes<Svg>>;

export default LinkCheckCircleRound;
export { LinkCheckCircleRound };
