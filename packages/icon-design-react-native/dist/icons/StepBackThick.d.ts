import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepBackThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepBackThick: ForwardRefExoticComponent<StepBackThickProps & RefAttributes<Svg>>;

export default StepBackThick;
export { StepBackThick };
