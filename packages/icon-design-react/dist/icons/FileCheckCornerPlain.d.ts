import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCornerPlain: ForwardRefExoticComponent<FileCheckCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCornerPlain;
export { FileCheckCornerPlain };
