import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileVideoCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileVideoCut: ForwardRefExoticComponent<FileVideoCutProps & RefAttributes<SVGSVGElement>>;

export default FileVideoCut;
export { FileVideoCut };
