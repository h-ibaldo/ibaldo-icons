import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMinusCircle: ForwardRefExoticComponent<WindowMinusCircleProps & RefAttributes<Svg>>;

export default WindowMinusCircle;
export { WindowMinusCircle };
