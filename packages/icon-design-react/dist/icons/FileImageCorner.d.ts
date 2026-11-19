import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileImageCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileImageCorner: ForwardRefExoticComponent<FileImageCornerProps & RefAttributes<SVGSVGElement>>;

export default FileImageCorner;
export { FileImageCorner };
