import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackCode: ForwardRefExoticComponent<FileStackCodeProps & RefAttributes<SVGSVGElement>>;

export default FileStackCode;
export { FileStackCode };
