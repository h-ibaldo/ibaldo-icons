import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCheckCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCheckCirclePlain: ForwardRefExoticComponent<FileCheckCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default FileCheckCirclePlain;
export { FileCheckCirclePlain };
