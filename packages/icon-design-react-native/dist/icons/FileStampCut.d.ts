import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStampCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStampCut: ForwardRefExoticComponent<FileStampCutProps & RefAttributes<Svg>>;

export default FileStampCut;
export { FileStampCut };
