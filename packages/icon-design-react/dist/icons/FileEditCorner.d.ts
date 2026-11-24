import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditCorner: ForwardRefExoticComponent<FileEditCornerProps & RefAttributes<SVGSVGElement>>;

export default FileEditCorner;
export { FileEditCorner };
