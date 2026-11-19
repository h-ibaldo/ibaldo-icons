import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleMiddleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleMiddle: ForwardRefExoticComponent<ToggleMiddleProps & RefAttributes<Svg>>;

export default ToggleMiddle;
export { ToggleMiddle };
