import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadTriangle: ForwardRefExoticComponent<UploadTriangleProps & RefAttributes<Svg>>;

export default UploadTriangle;
export { UploadTriangle };
