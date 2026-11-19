import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Triangle: ForwardRefExoticComponent<TriangleProps & RefAttributes<Svg>>;

export default Triangle;
export { Triangle };
