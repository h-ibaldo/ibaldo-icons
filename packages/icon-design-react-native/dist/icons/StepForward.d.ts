import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepForwardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepForward: ForwardRefExoticComponent<StepForwardProps & RefAttributes<Svg>>;

export default StepForward;
export { StepForward };
