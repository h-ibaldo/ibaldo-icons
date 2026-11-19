import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileFilterCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileFilterCut: ForwardRefExoticComponent<FileFilterCutProps & RefAttributes<Svg>>;

export default FileFilterCut;
export { FileFilterCut };
