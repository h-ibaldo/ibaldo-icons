import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandStopCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandStopCircle: ForwardRefExoticComponent<HandStopCircleProps & RefAttributes<Svg>>;

export default HandStopCircle;
export { HandStopCircle };
