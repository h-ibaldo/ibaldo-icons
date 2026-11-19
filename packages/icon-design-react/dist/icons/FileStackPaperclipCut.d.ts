import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackPaperclipCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackPaperclipCut: ForwardRefExoticComponent<FileStackPaperclipCutProps & RefAttributes<SVGSVGElement>>;

export default FileStackPaperclipCut;
export { FileStackPaperclipCut };
