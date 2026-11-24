import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderTabBackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderTabBack: ForwardRefExoticComponent<FolderTabBackProps & RefAttributes<Svg>>;

export default FolderTabBack;
export { FolderTabBack };
