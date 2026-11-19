import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleOff: ForwardRefExoticComponent<TriangleOffProps & RefAttributes<Svg>>;

export default TriangleOff;
export { TriangleOff };
