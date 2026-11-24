import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassPocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassPocket: ForwardRefExoticComponent<CompassPocketProps & RefAttributes<Svg>>;

export default CompassPocket;
export { CompassPocket };
