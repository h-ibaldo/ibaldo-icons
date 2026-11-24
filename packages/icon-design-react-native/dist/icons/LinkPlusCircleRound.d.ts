import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusCircleRound: ForwardRefExoticComponent<LinkPlusCircleRoundProps & RefAttributes<Svg>>;

export default LinkPlusCircleRound;
export { LinkPlusCircleRound };
