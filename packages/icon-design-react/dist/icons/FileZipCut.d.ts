import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileZipCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileZipCut: ForwardRefExoticComponent<FileZipCutProps & RefAttributes<SVGSVGElement>>;

export default FileZipCut;
export { FileZipCut };
