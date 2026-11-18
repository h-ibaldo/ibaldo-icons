import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStampProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStamp: ForwardRefExoticComponent<FileStampProps & RefAttributes<SVGSVGElement>>;

export default FileStamp;
export { FileStamp };
