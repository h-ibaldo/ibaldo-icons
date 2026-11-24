import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCode: ForwardRefExoticComponent<FileCodeProps & RefAttributes<SVGSVGElement>>;

export default FileCode;
export { FileCode };
