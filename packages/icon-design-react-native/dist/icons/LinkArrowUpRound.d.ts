import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpRound: ForwardRefExoticComponent<LinkArrowUpRoundProps & RefAttributes<Svg>>;

export default LinkArrowUpRound;
export { LinkArrowUpRound };
