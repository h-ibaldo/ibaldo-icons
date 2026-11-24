import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PauseCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PauseCircle: ForwardRefExoticComponent<PauseCircleProps & RefAttributes<Svg>>;

export default PauseCircle;
export { PauseCircle };
