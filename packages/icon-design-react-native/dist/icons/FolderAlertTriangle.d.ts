import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderAlertTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderAlertTriangle: ForwardRefExoticComponent<FolderAlertTriangleProps & RefAttributes<Svg>>;

export default FolderAlertTriangle;
export { FolderAlertTriangle };
