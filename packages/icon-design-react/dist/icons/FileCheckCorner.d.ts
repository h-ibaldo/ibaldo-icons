import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCorner: ForwardRefExoticComponent<FileCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCorner;
export { FileCheckCorner };
