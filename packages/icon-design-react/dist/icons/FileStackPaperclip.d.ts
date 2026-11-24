import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackPaperclipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackPaperclip: ForwardRefExoticComponent<FileStackPaperclipProps & RefAttributes<SVGSVGElement>>;

export default FileStackPaperclip;
export { FileStackPaperclip };
