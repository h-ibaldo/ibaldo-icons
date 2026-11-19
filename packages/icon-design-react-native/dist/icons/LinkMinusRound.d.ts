import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusRound: ForwardRefExoticComponent<LinkMinusRoundProps & RefAttributes<Svg>>;

export default LinkMinusRound;
export { LinkMinusRound };
