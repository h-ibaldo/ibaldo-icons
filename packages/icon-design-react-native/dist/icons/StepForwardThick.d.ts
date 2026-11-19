import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepForwardThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepForwardThick: ForwardRefExoticComponent<StepForwardThickProps & RefAttributes<Svg>>;

export default StepForwardThick;
export { StepForwardThick };
