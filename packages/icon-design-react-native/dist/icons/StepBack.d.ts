import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepBackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepBack: ForwardRefExoticComponent<StepBackProps & RefAttributes<Svg>>;

export default StepBack;
export { StepBack };
