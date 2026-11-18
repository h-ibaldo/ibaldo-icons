import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileX: ForwardRefExoticComponent<FileXProps & RefAttributes<SVGSVGElement>>;

export default FileX;
export { FileX };
