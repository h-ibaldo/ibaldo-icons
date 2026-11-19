import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearMultipleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearMultiple: ForwardRefExoticComponent<GearMultipleProps & RefAttributes<Svg>>;

export default GearMultiple;
export { GearMultiple };
