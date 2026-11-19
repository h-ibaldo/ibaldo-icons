import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtOneCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtOneCircle: ForwardRefExoticComponent<AtOneCircleProps & RefAttributes<Svg>>;

export default AtOneCircle;
export { AtOneCircle };
