import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearStack: ForwardRefExoticComponent<GearStackProps & RefAttributes<Svg>>;

export default GearStack;
export { GearStack };
