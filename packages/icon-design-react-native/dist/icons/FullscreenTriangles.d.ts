import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FullscreenTrianglesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FullscreenTriangles: ForwardRefExoticComponent<FullscreenTrianglesProps & RefAttributes<Svg>>;

export default FullscreenTriangles;
export { FullscreenTriangles };
