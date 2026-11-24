import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const File: ForwardRefExoticComponent<FileProps & RefAttributes<SVGSVGElement>>;

export default File;
export { File };
