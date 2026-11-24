import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMailCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMailCut: ForwardRefExoticComponent<FileMailCutProps & RefAttributes<Svg>>;

export default FileMailCut;
export { FileMailCut };
