import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearRound: ForwardRefExoticComponent<GearRoundProps & RefAttributes<Svg>>;

export default GearRound;
export { GearRound };
