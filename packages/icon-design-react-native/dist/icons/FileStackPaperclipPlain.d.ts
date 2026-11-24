import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackPaperclipPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackPaperclipPlain: ForwardRefExoticComponent<FileStackPaperclipPlainProps & RefAttributes<Svg>>;

export default FileStackPaperclipPlain;
export { FileStackPaperclipPlain };
