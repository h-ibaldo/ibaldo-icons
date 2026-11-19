import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassCheck: ForwardRefExoticComponent<CompassCheckProps & RefAttributes<Svg>>;

export default CompassCheck;
export { CompassCheck };
