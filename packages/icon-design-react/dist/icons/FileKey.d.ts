import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileKeyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileKey: ForwardRefExoticComponent<FileKeyProps & RefAttributes<SVGSVGElement>>;

export default FileKey;
export { FileKey };
