import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkRaysRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkRaysRound: ForwardRefExoticComponent<LinkRaysRoundProps & RefAttributes<Svg>>;

export default LinkRaysRound;
export { LinkRaysRound };
