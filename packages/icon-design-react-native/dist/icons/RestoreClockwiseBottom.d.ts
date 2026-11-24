import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RestoreClockwiseBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RestoreClockwiseBottom: ForwardRefExoticComponent<RestoreClockwiseBottomProps & RefAttributes<Svg>>;

export default RestoreClockwiseBottom;
export { RestoreClockwiseBottom };
