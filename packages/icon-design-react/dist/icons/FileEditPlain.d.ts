import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEditPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEditPlain: ForwardRefExoticComponent<FileEditPlainProps & RefAttributes<SVGSVGElement>>;

export default FileEditPlain;
export { FileEditPlain };
