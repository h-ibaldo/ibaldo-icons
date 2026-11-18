import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArrowUpCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArrowUpCorner: ForwardRefExoticComponent<FileArrowUpCornerProps & RefAttributes<SVGSVGElement>>;

export default FileArrowUpCorner;
export { FileArrowUpCorner };
