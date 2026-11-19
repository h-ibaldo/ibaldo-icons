import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WrenchRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WrenchRound: ForwardRefExoticComponent<WrenchRoundProps & RefAttributes<Svg>>;

export default WrenchRound;
export { WrenchRound };
