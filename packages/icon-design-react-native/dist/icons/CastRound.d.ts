import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CastRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CastRound: ForwardRefExoticComponent<CastRoundProps & RefAttributes<Svg>>;

export default CastRound;
export { CastRound };
