import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearSearchDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearSearchDown: ForwardRefExoticComponent<GearSearchDownProps & RefAttributes<Svg>>;

export default GearSearchDown;
export { GearSearchDown };
