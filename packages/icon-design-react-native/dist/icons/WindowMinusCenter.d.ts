import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMinusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMinusCenter: ForwardRefExoticComponent<WindowMinusCenterProps & RefAttributes<Svg>>;

export default WindowMinusCenter;
export { WindowMinusCenter };
