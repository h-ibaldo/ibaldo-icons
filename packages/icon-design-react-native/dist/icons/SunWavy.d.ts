import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunWavy: ForwardRefExoticComponent<SunWavyProps & RefAttributes<Svg>>;

export default SunWavy;
export { SunWavy };
