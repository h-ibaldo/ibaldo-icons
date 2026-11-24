import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PowerCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PowerCircle: ForwardRefExoticComponent<PowerCircleProps & RefAttributes<Svg>>;

export default PowerCircle;
export { PowerCircle };
