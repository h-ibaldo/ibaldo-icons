import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileWinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileWink: ForwardRefExoticComponent<FileWinkProps & RefAttributes<SVGSVGElement>>;

export default FileWink;
export { FileWink };
