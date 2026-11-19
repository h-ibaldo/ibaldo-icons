import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StethoscopeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StethoscopeRound: ForwardRefExoticComponent<StethoscopeRoundProps & RefAttributes<Svg>>;

export default StethoscopeRound;
export { StethoscopeRound };
