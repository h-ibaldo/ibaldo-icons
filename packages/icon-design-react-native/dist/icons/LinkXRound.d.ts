import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXRound: ForwardRefExoticComponent<LinkXRoundProps & RefAttributes<Svg>>;

export default LinkXRound;
export { LinkXRound };
