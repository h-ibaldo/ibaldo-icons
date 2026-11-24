import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileZipCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileZipCut: ForwardRefExoticComponent<FileZipCutProps & RefAttributes<Svg>>;

export default FileZipCut;
export { FileZipCut };
