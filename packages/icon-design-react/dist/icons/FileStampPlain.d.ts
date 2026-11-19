import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStampPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStampPlain: ForwardRefExoticComponent<FileStampPlainProps & RefAttributes<SVGSVGElement>>;

export default FileStampPlain;
export { FileStampPlain };
