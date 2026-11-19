import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearTrayWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearTrayWavy: ForwardRefExoticComponent<GearTrayWavyProps & RefAttributes<Svg>>;

export default GearTrayWavy;
export { GearTrayWavy };
