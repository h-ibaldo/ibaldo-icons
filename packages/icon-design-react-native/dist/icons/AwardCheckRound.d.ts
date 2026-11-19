import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AwardCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AwardCheckRound: ForwardRefExoticComponent<AwardCheckRoundProps & RefAttributes<Svg>>;

export default AwardCheckRound;
export { AwardCheckRound };
