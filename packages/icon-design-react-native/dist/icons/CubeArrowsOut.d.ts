import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CubeArrowsOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CubeArrowsOut: ForwardRefExoticComponent<CubeArrowsOutProps & RefAttributes<Svg>>;

export default CubeArrowsOut;
export { CubeArrowsOut };
