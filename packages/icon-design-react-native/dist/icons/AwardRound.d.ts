import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AwardRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AwardRound: ForwardRefExoticComponent<AwardRoundProps & RefAttributes<Svg>>;

export default AwardRound;
export { AwardRound };
