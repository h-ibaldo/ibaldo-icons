import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandFistCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandFistCircle: ForwardRefExoticComponent<HandFistCircleProps & RefAttributes<Svg>>;

export default HandFistCircle;
export { HandFistCircle };
