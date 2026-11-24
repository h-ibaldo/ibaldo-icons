import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoonRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoonRound: ForwardRefExoticComponent<MoonRoundProps & RefAttributes<Svg>>;

export default MoonRound;
export { MoonRound };
