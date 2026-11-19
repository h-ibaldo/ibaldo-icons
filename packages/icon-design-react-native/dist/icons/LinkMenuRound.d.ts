import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuRound: ForwardRefExoticComponent<LinkMenuRoundProps & RefAttributes<Svg>>;

export default LinkMenuRound;
export { LinkMenuRound };
