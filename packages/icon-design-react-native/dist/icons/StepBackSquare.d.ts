import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StepBackSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StepBackSquare: ForwardRefExoticComponent<StepBackSquareProps & RefAttributes<Svg>>;

export default StepBackSquare;
export { StepBackSquare };
