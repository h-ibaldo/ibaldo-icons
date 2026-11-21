import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagWavy: ForwardRefExoticComponent<FlagWavyProps & RefAttributes<Svg>>;

export default FlagWavy;
export { FlagWavy };
