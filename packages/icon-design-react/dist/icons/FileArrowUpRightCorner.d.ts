import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpRightCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpRightCorner: ForwardRefExoticComponent<FileArrowUpRightCornerProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpRightCorner;
export { FileArrowUpRightCorner };
