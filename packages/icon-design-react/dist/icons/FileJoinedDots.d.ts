import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileJoinedDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileJoinedDots: ForwardRefExoticComponent<FileJoinedDotsProps & RefAttributes<SVGSVGElement>>;

export default FileJoinedDots;
export { FileJoinedDots };
