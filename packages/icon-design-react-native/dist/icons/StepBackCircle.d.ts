import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepBackCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepBackCircle: ForwardRefExoticComponent<StepBackCircleProps & RefAttributes<Svg>>;

export default StepBackCircle;
export { StepBackCircle };
