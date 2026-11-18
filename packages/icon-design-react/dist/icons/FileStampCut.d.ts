import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStampCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStampCut: ForwardRefExoticComponent<FileStampCutProps & RefAttributes<SVGSVGElement>>;

export default FileStampCut;
export { FileStampCut };
