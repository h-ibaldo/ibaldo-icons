import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheck: ForwardRefExoticComponent<FileCheckProps & RefAttributes<SVGSVGElement>>;

export default FileCheck;
export { FileCheck };
