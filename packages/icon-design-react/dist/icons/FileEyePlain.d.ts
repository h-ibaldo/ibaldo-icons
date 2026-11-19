import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileEyePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileEyePlain: ForwardRefExoticComponent<FileEyePlainProps & RefAttributes<SVGSVGElement>>;

export default FileEyePlain;
export { FileEyePlain };
