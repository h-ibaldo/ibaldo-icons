import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlusCircle: ForwardRefExoticComponent<WindowPlusCircleProps & RefAttributes<Svg>>;

export default WindowPlusCircle;
export { WindowPlusCircle };
