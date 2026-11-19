import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleOffSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleOffSmall: ForwardRefExoticComponent<TriangleOffSmallProps & RefAttributes<Svg>>;

export default TriangleOffSmall;
export { TriangleOffSmall };
