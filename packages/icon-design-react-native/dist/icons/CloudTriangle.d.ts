import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTriangle: ForwardRefExoticComponent<CloudTriangleProps & RefAttributes<Svg>>;

export default CloudTriangle;
export { CloudTriangle };
