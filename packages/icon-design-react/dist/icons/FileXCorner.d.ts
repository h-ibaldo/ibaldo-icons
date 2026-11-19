import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCorner: ForwardRefExoticComponent<FileXCornerProps & RefAttributes<SVGSVGElement>>;

export default FileXCorner;
export { FileXCorner };
