import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepForwardCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepForwardCircle: ForwardRefExoticComponent<StepForwardCircleProps & RefAttributes<Svg>>;

export default StepForwardCircle;
export { StepForwardCircle };
