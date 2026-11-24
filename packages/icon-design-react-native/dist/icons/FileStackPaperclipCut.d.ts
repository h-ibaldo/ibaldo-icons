import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackPaperclipCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackPaperclipCut: ForwardRefExoticComponent<FileStackPaperclipCutProps & RefAttributes<Svg>>;

export default FileStackPaperclipCut;
export { FileStackPaperclipCut };
