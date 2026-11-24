import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RestoreClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RestoreClockwise: ForwardRefExoticComponent<RestoreClockwiseProps & RefAttributes<Svg>>;

export default RestoreClockwise;
export { RestoreClockwise };
