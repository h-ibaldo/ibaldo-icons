import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileJoinedArrowDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileJoinedArrowDiagonal: ForwardRefExoticComponent<FileJoinedArrowDiagonalProps & RefAttributes<SVGSVGElement>>;

export default FileJoinedArrowDiagonal;
export { FileJoinedArrowDiagonal };
