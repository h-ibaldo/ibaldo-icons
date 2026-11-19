import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowCheckCircle: ForwardRefExoticComponent<WindowCheckCircleProps & RefAttributes<Svg>>;

export default WindowCheckCircle;
export { WindowCheckCircle };
