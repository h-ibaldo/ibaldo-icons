import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PowerOffCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PowerOffCircle: ForwardRefExoticComponent<PowerOffCircleProps & RefAttributes<Svg>>;

export default PowerOffCircle;
export { PowerOffCircle };
