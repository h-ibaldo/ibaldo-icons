import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckPlain: ForwardRefExoticComponent<FileCheckPlainProps & RefAttributes<SVGSVGElement>>;

export default FileCheckPlain;
export { FileCheckPlain };
