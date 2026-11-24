import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLettersCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLettersCut: ForwardRefExoticComponent<FileLettersCutProps & RefAttributes<SVGSVGElement>>;

export default FileLettersCut;
export { FileLettersCut };
