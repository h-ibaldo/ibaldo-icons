import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXPlain: ForwardRefExoticComponent<FileXPlainProps & RefAttributes<SVGSVGElement>>;

export default FileXPlain;
export { FileXPlain };
