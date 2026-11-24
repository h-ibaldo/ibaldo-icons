import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlagOffWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlagOffWavy: ForwardRefExoticComponent<FlagOffWavyProps & RefAttributes<Svg>>;

export default FlagOffWavy;
export { FlagOffWavy };
