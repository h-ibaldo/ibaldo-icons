import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassPivotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassPivot: ForwardRefExoticComponent<CompassPivotProps & RefAttributes<Svg>>;

export default CompassPivot;
export { CompassPivot };
