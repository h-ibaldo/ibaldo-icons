import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ApproximateCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ApproximateCircle: ForwardRefExoticComponent<ApproximateCircleProps & RefAttributes<Svg>>;

export default ApproximateCircle;
export { ApproximateCircle };
