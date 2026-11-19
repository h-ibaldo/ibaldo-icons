import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckCornerCut: ForwardRefExoticComponent<FileCheckCornerCutProps & RefAttributes<Svg>>;

export default FileCheckCornerCut;
export { FileCheckCornerCut };
