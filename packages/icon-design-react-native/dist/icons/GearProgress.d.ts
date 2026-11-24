import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearProgressProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearProgress: ForwardRefExoticComponent<GearProgressProps & RefAttributes<Svg>>;

export default GearProgress;
export { GearProgress };
