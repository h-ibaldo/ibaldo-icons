import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RestoreCounterclockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RestoreCounterclockwise: ForwardRefExoticComponent<RestoreCounterclockwiseProps & RefAttributes<Svg>>;

export default RestoreCounterclockwise;
export { RestoreCounterclockwise };
