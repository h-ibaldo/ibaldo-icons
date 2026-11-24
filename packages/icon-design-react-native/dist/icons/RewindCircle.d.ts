import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RewindCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RewindCircle: ForwardRefExoticComponent<RewindCircleProps & RefAttributes<Svg>>;

export default RewindCircle;
export { RewindCircle };
