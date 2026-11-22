import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileZipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileZip: ForwardRefExoticComponent<FileZipProps & RefAttributes<SVGSVGElement>>;

export default FileZip;
export { FileZip };
