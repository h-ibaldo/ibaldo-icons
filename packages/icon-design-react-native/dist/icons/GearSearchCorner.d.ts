import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearSearchCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearSearchCorner: ForwardRefExoticComponent<GearSearchCornerProps & RefAttributes<Svg>>;

export default GearSearchCorner;
export { GearSearchCorner };
