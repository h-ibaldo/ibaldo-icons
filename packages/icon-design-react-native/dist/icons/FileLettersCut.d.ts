import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLettersCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLettersCut: ForwardRefExoticComponent<FileLettersCutProps & RefAttributes<Svg>>;

export default FileLettersCut;
export { FileLettersCut };
