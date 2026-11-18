import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMinusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMinusCorner: ForwardRefExoticComponent<FileMinusCornerProps & RefAttributes<SVGSVGElement>>;

export default FileMinusCorner;
export { FileMinusCorner };
