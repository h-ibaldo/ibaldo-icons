import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusRound: ForwardRefExoticComponent<LinkPlusRoundProps & RefAttributes<Svg>>;

export default LinkPlusRound;
export { LinkPlusRound };
