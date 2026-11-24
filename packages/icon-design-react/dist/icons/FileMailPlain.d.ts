import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileMailPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileMailPlain: ForwardRefExoticComponent<FileMailPlainProps & RefAttributes<SVGSVGElement>>;

export default FileMailPlain;
export { FileMailPlain };
