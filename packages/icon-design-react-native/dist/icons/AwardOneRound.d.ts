import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AwardOneRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AwardOneRound: ForwardRefExoticComponent<AwardOneRoundProps & RefAttributes<Svg>>;

export default AwardOneRound;
export { AwardOneRound };
