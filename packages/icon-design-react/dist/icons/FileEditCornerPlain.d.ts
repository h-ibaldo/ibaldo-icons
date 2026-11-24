import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditCornerPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditCornerPlain: ForwardRefExoticComponent<FileEditCornerPlainProps & RefAttributes<SVGSVGElement>>;

export default FileEditCornerPlain;
export { FileEditCornerPlain };
