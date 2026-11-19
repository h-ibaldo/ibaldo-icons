import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleStackArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleStackArc: ForwardRefExoticComponent<CheckCircleStackArcProps & RefAttributes<Svg>>;

export default CheckCircleStackArc;
export { CheckCircleStackArc };
