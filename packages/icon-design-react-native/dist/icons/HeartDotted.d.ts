import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartDotted: ForwardRefExoticComponent<HeartDottedProps & RefAttributes<Svg>>;

export default HeartDotted;
export { HeartDotted };
