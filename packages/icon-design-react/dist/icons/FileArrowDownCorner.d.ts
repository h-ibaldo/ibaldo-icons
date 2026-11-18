import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowDownCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowDownCorner: ForwardRefExoticComponent<FileArrowDownCornerProps & RefAttributes<SVGSVGElement>>;

export default FileArrowDownCorner;
export { FileArrowDownCorner };
