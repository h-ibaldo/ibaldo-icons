import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassRoseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassRose: ForwardRefExoticComponent<CompassRoseProps & RefAttributes<Svg>>;

export default CompassRose;
export { CompassRose };
