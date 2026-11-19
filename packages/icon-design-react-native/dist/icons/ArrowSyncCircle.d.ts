import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCircle: ForwardRefExoticComponent<ArrowSyncCircleProps & RefAttributes<Svg>>;

export default ArrowSyncCircle;
export { ArrowSyncCircle };
