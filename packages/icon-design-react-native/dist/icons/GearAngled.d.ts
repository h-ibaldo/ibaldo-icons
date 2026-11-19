import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearAngled: ForwardRefExoticComponent<GearAngledProps & RefAttributes<Svg>>;

export default GearAngled;
export { GearAngled };
