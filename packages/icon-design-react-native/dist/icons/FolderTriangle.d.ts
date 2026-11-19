import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderTriangle: ForwardRefExoticComponent<FolderTriangleProps & RefAttributes<Svg>>;

export default FolderTriangle;
export { FolderTriangle };
