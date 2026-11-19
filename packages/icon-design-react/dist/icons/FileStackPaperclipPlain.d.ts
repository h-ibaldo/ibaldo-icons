import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackPaperclipPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackPaperclipPlain: ForwardRefExoticComponent<FileStackPaperclipPlainProps & RefAttributes<SVGSVGElement>>;

export default FileStackPaperclipPlain;
export { FileStackPaperclipPlain };
