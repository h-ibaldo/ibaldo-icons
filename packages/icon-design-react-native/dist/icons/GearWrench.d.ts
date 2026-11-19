import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearWrenchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearWrench: ForwardRefExoticComponent<GearWrenchProps & RefAttributes<Svg>>;

export default GearWrench;
export { GearWrench };
